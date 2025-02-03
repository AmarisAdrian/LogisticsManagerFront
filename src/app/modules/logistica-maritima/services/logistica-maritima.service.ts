import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroments';
import { HttpClient, } from '@angular/common/http';
import { LogisticaMaritima } from '../models/logistica-marina.model.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogisticaMaritimaService {

   private apiUrl = `${environment.apiUrl}/api/v1/logistica-maritima`;
  constructor(private http: HttpClient) {}

   createEnvio(logistica: LogisticaMaritima): Observable<LogisticaMaritima> {
      return this.http.post<LogisticaMaritima>(`${this.apiUrl}/crear-logistica-maritima`, logistica);
  }
}
