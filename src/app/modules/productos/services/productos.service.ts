import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroments';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto,ProductoResponse,ProductosResponse} from '../models/productos.model.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = `${environment.apiUrl}/api/v1/productos`;
  constructor(private http: HttpClient) {}

   getProductos(): Observable<Producto[]> {
      return this.http.get<ProductosResponse>(`${this.apiUrl}/`).pipe(
        map((response : ProductosResponse) => response.data));
    }
    getTipoProductos(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/tipo-producto`);
    }
    createProducto(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(`${this.apiUrl}/crear-producto`, producto);
    }
    getProductoById(id: string): Observable<Producto> {
      return this.http.get<ProductoResponse>(`${this.apiUrl}/${id}`).pipe(
        map((response : ProductoResponse) => response.data));
    }
    updateProducto(producto: Producto): Observable<Producto> {
        return this.http.put<Producto>(`${this.apiUrl}/editar-producto/${producto.id_producto}`, producto);
    }
    getProductoByNombre(nombre: string): Observable<Producto[]> {
      return this.http.get<ProductosResponse>(`${this.apiUrl}/buscar-producto/${nombre}`).pipe(
        map((response : ProductosResponse) => response.data));;
    }
}
