import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../../ventas/services/producto.service';
import { ProductoDTO } from '../../../../../control/ProductoDTO';
import { EstablecimientoDTO } from '../../../../../control/EstablecimientoDTO';
import { LoginService } from '../../../../authentication/services/login.service';
import { PermisoDTO } from 'src/control/PermisoDTO';

declare var window: any;

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

  permiso!: PermisoDTO;
  establecimiento!: EstablecimientoDTO
  productos: ProductoDTO[] = [];

  mostrarMensaje: boolean = false;
  mensaje = "";

  //Paginacion
  public page!: number;

  //Modal
  producto!: ProductoDTO;
  formModal: any;
  idProducto: number = 0;
  nombre: string = "";
  precio: number = 0;
  errorActualizar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private loginService: LoginService
  ) {
    let permiso: PermisoDTO = JSON.parse(localStorage.getItem('permiso')!);
    this.permiso = permiso;
    this.establecimiento = this.loginService.permisos?.establecimiento || permiso.establecimiento;
    this.listarProductos(this.establecimiento);
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    precio: ['', [Validators.required, Validators.minLength(5)]]
  });

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  openModal(producto: ProductoDTO) {
    this.producto = producto;
    this.idProducto = producto.idProducto;
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.formModal.show();
  }

  listarProductos(establecimiento: EstablecimientoDTO) {
    let idEstablecimiento = establecimiento.idEstablecimiento;
    this.productoService.lista(idEstablecimiento).subscribe((res: ProductoDTO[]) => {
      this.productos = res;
    });
  }

  agregar() {
    const nombre: string = this.miFormulario.get('nombre')?.value;
    const precio: number = this.miFormulario.get('precio')?.value;
    console.log("Producto: " + nombre);
    console.log("Precio: " + precio);
    let producto: ProductoDTO = new ProductoDTO(0, this.establecimiento.idEstablecimiento, nombre, precio, true, this.establecimiento);
    this.productoService.agregar(producto).subscribe((resp: ProductoDTO) => {
      this.listarProductos(this.establecimiento);
      this.mostrarMensaje = true;
      this.mensaje = "Se ha agregado el producto correctamente"
    });
  }

  editar() {
    this.producto.nombre = this.nombre;
    this.producto.precio = this.precio;
    this.productoService.editar(this.producto).subscribe((resp: ProductoDTO) => {
      this.mostrarMensaje = true;
      this.mensaje = "Se ha editado el producto correctamente"
      this.listarProductos(this.establecimiento);
    });
  }

}
