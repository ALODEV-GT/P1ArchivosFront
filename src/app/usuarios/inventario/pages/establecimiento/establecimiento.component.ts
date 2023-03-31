import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/usuarios/ventas/services/producto.service';
import { ProductoDTO } from 'src/control/ProductoDTO';
import { EstablecimientoDTO } from '../../../../../control/EstablecimientoDTO';
import { EstablecimientoService } from '../../services/establecimiento.service';
import { LoginService } from '../../../../authentication/services/login.service';
import { PermisoDTO } from 'src/control/PermisoDTO';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

  //Solicitar al servicio que liste los diferentes establecimientos
  establecimientos: EstablecimientoDTO[] = [];

  btnNameActive: string = "Establecimiento";
  establecimientoLocal: boolean = false;
  establecimientoElegido!: EstablecimientoDTO;

  productos: ProductoDTO[] = [];
  idEstablecimiento: number = 1;
  permiso!: PermisoDTO;

  mostarMensaje: boolean = false;
  mensaje: string = "";

  //Paginacion
  public page!: number;

  constructor(
    private establecimientoService: EstablecimientoService,
    private productoService: ProductoService,
    private loginService: LoginService
  ) {
    this.listar();
    let permiso: PermisoDTO = JSON.parse(localStorage.getItem('permiso')!);
    this.permiso = permiso;
    this.idEstablecimiento = this.loginService.permisos?.establecimiento?.idEstablecimiento || permiso.establecimiento.idEstablecimiento;
  }

  ngOnInit(): void {
  }

  listarProductos(establecimiento: EstablecimientoDTO) {
    this.btnNameActive = establecimiento.nombre;
    this.establecimientoElegido = establecimiento;

    let idEstablecimiento = establecimiento.idEstablecimiento;
    if (this.idEstablecimiento == idEstablecimiento) {
      this.establecimientoLocal = true;
    } else {
      this.establecimientoLocal = false;
    }
    //Pedir al servicio que liste los productos de dicha sucursal
    this.productoService.lista(idEstablecimiento).subscribe((res: ProductoDTO[]) => {
      this.productos = res;
    });
  }

  listar() {
    this.establecimientoService.lista().subscribe((res: EstablecimientoDTO[]) => {
      this.establecimientos = res;
    });
  }

  transferir(producto: ProductoDTO) {
    this.mensaje = "Se transfirio de " + this.btnNameActive + " al establecimiento actual: " + this.permiso.establecimiento.nombre;
    this.mostarMensaje = true;
    producto.idEstablecimiento = this.idEstablecimiento;
    this.productoService.transferir(producto).subscribe((resp: ProductoDTO) => {
      console.log("Producto actualizado");
      console.log(resp);
      this.listarProductos(this.establecimientoElegido);
    });
  }

}
