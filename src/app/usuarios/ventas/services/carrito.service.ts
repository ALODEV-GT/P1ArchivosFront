import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductoDTO } from '../../../../control/ProductoDTO';
import { VentaGDTO } from '../../../../control/VentaGDTO';
import { VentaDTO } from '../../../../control/VentaDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/venta";

  carrito: ProductoDTO[] = [];

  constructor(private http: HttpClient) { }

  agregar(producto: ProductoDTO) {
    this.carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  quitar(producto: ProductoDTO) {
    let idProductos: number[] = [];
    this.carrito.forEach((producto: ProductoDTO) => { idProductos.push(producto.idProducto) });
    let i = idProductos.indexOf(producto.idProducto);
    console.log("El idice a eliminar es: " + i);
    this.carrito.splice(i, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  getCarrito(): ProductoDTO[] {
    return this.carrito;
  }

  comprar(venta: VentaGDTO): Observable<void> {
    return this.http.post<void>(this.baseUrl + "/comprar", venta);
  }
}
