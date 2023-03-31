import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PrimerReporte } from '../../../../control/reportesBean/PrimerReporte';
import { SegundoReporte } from '../../../../control/reportesBean/SegundoReporte';
import { TercerReporte } from '../../../../control/reportesBean/TercerReporte';
import { CuartoReporte } from '../../../../control/reportesBean/CuartoReporte';
import { QuintoReporte } from '../../../../control/reportesBean/QuintoReporte';
import { SextoReporte } from '../../../../control/reportesBean/SextoReporte';
import { OctavoReporte } from '../../../../control/reportesBean/OctavoReporte';
import { NovenoReporte } from '../../../../control/reportesBean/NovenoReporte';
import { DecimoReporte } from '../../../../control/reportesBean/DecimoReporte';
import { SeptimoReporte } from '../../../../control/reportesBean/SeptimoReporte';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/reportes";

  constructor(private http: HttpClient) { }

  masVendido(): Observable<PrimerReporte[]> {
    return this.http.get<PrimerReporte[]>(this.baseUrl + "/mas-vendido");
  }

  clientesTop(): Observable<SegundoReporte[]> {
    return this.http.get<SegundoReporte[]>(this.baseUrl + "/clientes-top");
  }

  sucursalesTopVentas(): Observable<TercerReporte[]> {
    return this.http.get<TercerReporte[]>(this.baseUrl + "/sucursales-top-ventas");
  }

  sucursalesTopIngresos(): Observable<CuartoReporte[]> {
    return this.http.get<CuartoReporte[]>(this.baseUrl + "/sucursales-top-ingresos");
  }

  empleadosTopVentas(): Observable<QuintoReporte[]> {
    return this.http.get<QuintoReporte[]>(this.baseUrl + "/empleado-top-ventas");
  }

  empleadosTopIngresos(): Observable<SextoReporte[]> {
    return this.http.get<SextoReporte[]>(this.baseUrl + "/empleado-top-ingresos");
  }

  productosTopVentas(): Observable<SeptimoReporte[]> {
    return this.http.get<SeptimoReporte[]>(this.baseUrl + "/productos-top-ventas");
  }

  productosTopIngresos(): Observable<OctavoReporte[]> {
    return this.http.get<OctavoReporte[]>(this.baseUrl + "/productos-top-ingresos");
  }

  productosTopVentasSucursal(idEstablecimiento: number): Observable<NovenoReporte[]> {
    return this.http.get<NovenoReporte[]>(this.baseUrl + "/productos-top-ventas-sucursal/" + idEstablecimiento);
  }

  productosTopIngresosSucursal(idEstablecimiento: number): Observable<DecimoReporte[]> {
    return this.http.get<DecimoReporte[]>(this.baseUrl + "/productos-top-ingresos-sucursal/" + idEstablecimiento);
  }
}
