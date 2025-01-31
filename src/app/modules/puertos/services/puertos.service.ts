import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroments';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuertosService {
  private apiUrl = `${environment.apiUrl}/api/v1/puertos`;
  constructor(private http: HttpClient) {}
  getPuertos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/puertos`);
  }
}
