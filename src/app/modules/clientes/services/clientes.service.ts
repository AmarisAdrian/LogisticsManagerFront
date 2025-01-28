import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente,ClientesResponse,ClienteResponse} from '../models/cliente.model.model';
import { environment } from '../../../../enviroments/enviroments';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = `${environment.apiUrl}/api/v1/clientes`;
  constructor(private http: HttpClient) {}
  getTipoClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tipo-cliente`);
  }
  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/crear-cliente`, cliente);
  }
  getClientes(): Observable<Cliente[]> {
    return this.http.get<ClientesResponse>(`${this.apiUrl}/`).pipe(
      map((response : ClientesResponse) => response.data));
  }
  getClienteById(id: string): Observable<Cliente> {
    return this.http.get<ClienteResponse>(`${this.apiUrl}/${id}`).pipe(
      map((response : ClienteResponse) => response.data));
  }
  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/editar-cliente/${cliente.id_cliente}`, cliente);
  }
  
  
}