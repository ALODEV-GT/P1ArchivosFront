import { Component, Input, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/control/ClienteDTO';
import { ProductoDTO } from '../../../../../control/ProductoDTO';
import { CarritoService } from '../../services/carrito.service';
import { ClienteService } from '../../services/cliente.service';
import { VentaGDTO } from '../../../../../control/VentaGDTO';
import { VentaDTO } from '../../../../../control/VentaDTO';
import { LoginService } from '../../../../authentication/services/login.service';
import { PermisoDTO } from '../../../../../control/PermisoDTO';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  productos: ProductoDTO[] = [];

  total: number = 0;
  descuento: number = 0;
  totalFinal: number = 0;
  descuentoPorc: number = 0;

  //Paginacion
  public page!: number;

  nit: string = "";
  error: boolean = true;
  mensajeError: string = "";

  constructor(
    private carritoService: CarritoService,
    private clienteService: ClienteService,
    private loginService: LoginService
  ) {
    this.listar();
  }

  listar() {
    let carrito: ProductoDTO[] = this.carritoService.carrito || JSON.parse(localStorage.getItem('carrito')!);
    this.productos = carrito;
    this.calcularDescuento();
  }

  ngOnInit(): void {
  }

  eliminar(producto: ProductoDTO) {
    this.carritoService.quitar(producto);
    this.listar();
  }

  calcularTotal(): number {
    let total: number = 0;
    this.productos.forEach((producto: ProductoDTO) => { total += producto.precio });
    return total;
  }

  calcularDescuento() {
    this.total = this.calcularTotal();
    if (this.total > 10000) {
      this.descuento = this.total * 0.1;
      this.totalFinal = this.total - this.descuento;
      this.descuentoPorc = 10;
    } else if (this.total > 5000) {
      this.descuento = this.total * 0.05;
      this.totalFinal = this.total - this.descuento;
      this.descuentoPorc = 5;
    } else if (this.total > 1000) {
      this.descuento = this.total * 0.02;
      this.totalFinal = this.total - this.descuento;
      this.descuentoPorc = 2;
    } else {
      this.descuento = 0;
      this.totalFinal = this.total - this.descuento;
      this.descuentoPorc = 0;
    }
  }

  realizarVenta() {
    //Validar nit del cliente
    this.clienteService.validar(new ClienteDTO(this.nit, "", false)).subscribe((resp: ClienteDTO) => {
      if (!resp.existe) {
        this.error = true;
        this.mensajeError = "El nit " + this.nit + " no esta registrado, registra a este cliente"
        return;
      } else {
        //Realizar venta
        let permiso: PermisoDTO = this.loginService.permisos || JSON.parse(localStorage.getItem('permiso')!);
        let venta: VentaDTO = new VentaDTO(0, this.nit, permiso.idEmpleado, this.totalFinal, this.descuento, this.descuentoPorc);
        let productos: ProductoDTO[] = this.carritoService.carrito;
        let ventaG: VentaGDTO = new VentaGDTO(venta, productos);
        if (productos.length > 0) {
          this.carritoService.comprar(ventaG).subscribe((resp) => {
            this.error = true;
            this.mensajeError = "Venta realizada correctamente"
            this.limpiar();
          });
        } else {
          this.error = true;
          this.mensajeError = "No hay productos en el carrito"
        }
      }
    });
  }

  limpiar() {
    this.descuento = 0;
    this.total = 0;
    this.totalFinal = 0;
    this.carritoService.carrito=[];
    localStorage.setItem("carrito", JSON.stringify(this.carritoService.carrito));
    this.listar();
  }

}
