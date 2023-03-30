import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductoDTO } from '../../../../../control/ProductoDTO';
import { LoginService } from 'src/app/authentication/services/login.service';
import { PermisoDTO } from '../../../../../control/PermisoDTO';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!: ProductoDTO[];

  //Paginacion
  public page!: number;

  constructor(
    private productoService: ProductoService,
    private loginService: LoginService,
    private carritoService: CarritoService
  ) {
    this.getInfoSucursal();
  }

  getInfoSucursal() {
    let permiso: PermisoDTO = JSON.parse(localStorage.getItem('permiso')!);
    let idEstablecimiento = this.loginService.permisos?.establecimiento?.idEstablecimiento || permiso.establecimiento.idEstablecimiento;
    this.listar(idEstablecimiento);
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: ProductoDTO) {
    this.carritoService.agregar(producto);
    this.getInfoSucursal();
  }

  estaEnCarrito(idProducto: number){
    let carrito: ProductoDTO[] = this.carritoService.carrito;
    let idProductos: number[] = [];
    carrito.forEach((producto)=>{idProductos.push(producto.idProducto)});
    let i: number = idProductos.indexOf(idProducto)
    return (i>=0)? true : false;
  }

  listar(idEstablecimiento: number) {
    this.productoService.lista(idEstablecimiento).subscribe((res: ProductoDTO[]) => {
      this.productos = res;
    });
  }

}
