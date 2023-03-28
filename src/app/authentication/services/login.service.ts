import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EmpleadoDTO } from '../../../control/EmpleadoDTO';
import { PermisoDTO } from '../../../control/PermisoDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/login/log";

  //Sesion:
  private _empleado!: EmpleadoDTO;
  private _permisos!: PermisoDTO;

  constructor(private http: HttpClient) { }

  validarUsuario(usuario: EmpleadoDTO) {
    return this.http.post<PermisoDTO>(this.baseUrl, usuario);
  }

  public get empleado(): EmpleadoDTO {
    return this._empleado;
  }
  public set empleado(value: EmpleadoDTO) {
    this._empleado = value;
  }
  public get permisos(): PermisoDTO {
    return this._permisos;
  }
  public set permisos(value: PermisoDTO) {
    this._permisos = value;
  }
}

