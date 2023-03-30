import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EstablecimientoDTO } from '../../../../control/EstablecimientoDTO';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/establecimiento";

  constructor(private http: HttpClient) { }

  lista(): Observable<EstablecimientoDTO[]> {
    return this.http.get<EstablecimientoDTO[]>(this.baseUrl + "/lista");
  }
}
