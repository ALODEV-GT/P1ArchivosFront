import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RolEmpleadoDTO } from '../../../../control/RolEmpleadoDTO';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/rol-empleado";

  constructor(private http: HttpClient) { }

  lista(): Observable<RolEmpleadoDTO[]> {
    return this.http.get<RolEmpleadoDTO[]>(this.baseUrl + "/lista");
  }
}
