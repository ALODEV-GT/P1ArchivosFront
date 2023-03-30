import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ClienteDTO } from '../../../../control/ClienteDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = "http://localhost:8090/electronic-homes/api/cliente";

  constructor(private http: HttpClient) { }

  validar(cliente: ClienteDTO): Observable<ClienteDTO>{
    return this.http.post<ClienteDTO>(this.baseUrl+"/validar", cliente);
  }

  agregar(cliente: ClienteDTO): Observable<ClienteDTO>{
    return this.http.post<ClienteDTO>(this.baseUrl+"/agregar", cliente);
  }

  lista(): Observable<ClienteDTO[]>{
    return this.http.get<ClienteDTO[]>(this.baseUrl+"/lista");
  }

  eliminar(nit: string):Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl+"/eliminar", nit);
  }

  editar(cliente: ClienteDTO):Observable<ClienteDTO>{
    return this.http.post<ClienteDTO>(this.baseUrl+"/editar", cliente);
  }
}
