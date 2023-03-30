import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmpleadoDTO } from '../../../../control/EmpleadoDTO';
import { PermisoDTO } from 'src/control/PermisoDTO';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/empleado";

  constructor(private http: HttpClient) { }

  agregar(empleado: EmpleadoDTO): Observable<EmpleadoDTO> {
    return this.http.post<EmpleadoDTO>(this.baseUrl + "/agregar", empleado);
  }

  lista(): Observable<EmpleadoDTO[]> {
    return this.http.get<EmpleadoDTO[]>(this.baseUrl + "/lista");
  }

  eliminar(empleado: EmpleadoDTO): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + "/eliminar", empleado);
  }

  editar(empleado: EmpleadoDTO): Observable<EmpleadoDTO> {
    return this.http.post<EmpleadoDTO>(this.baseUrl + "/editar", empleado);
  }

  validarUsuario(usuario: EmpleadoDTO) {
    return this.http.post<PermisoDTO>(this.baseUrl+"/validar", usuario);
  }
}
