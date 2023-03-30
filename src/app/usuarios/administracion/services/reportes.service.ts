import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/reportes";

  constructor(private http: HttpClient) { }

  masVendido(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/mas-vendido");
  }

  clientesTop(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/clientes-top");
  }

  sucursalesTopVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/sucursales-top-ventas");
  }

  sucursalesTopIngresos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/sucursales-top-ingresos");
  }

  empleadosTopVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/empleado-top-ventas");
  }

  empleadosTopIngresos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/empleado-top-ingresos");
  }

  productosTopVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/productos-top-ventas");
  }

  productosTopIngresos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/productos-top-ingresos");
  }

  productosTopVentasSucursal(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/productos-top-ventas-sucursal");
  }

  productosTopIngresosSucursal(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/productos-top-ingresos-sucursal");
  }
}
