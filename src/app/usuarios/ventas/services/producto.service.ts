import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductoDTO } from '../../../../control/ProductoDTO';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/producto";

  constructor(private http: HttpClient) { }

  lista(idEstablecimiento: number): Observable<ProductoDTO[]> {
    return this.http.get<ProductoDTO[]>(this.baseUrl + "/lista/" + idEstablecimiento);
  }

  transferir(producto: ProductoDTO): Observable<ProductoDTO> {
    return this.http.post<ProductoDTO>(this.baseUrl + "/transferir", producto);
  }

  agregar(producto: ProductoDTO): Observable<ProductoDTO> {
    return this.http.post<ProductoDTO>(this.baseUrl + "/agregar", producto);
  }

  editar(producto: ProductoDTO): Observable<ProductoDTO> {
    return this.http.post<ProductoDTO>(this.baseUrl + "/editar", producto);
  }
}

