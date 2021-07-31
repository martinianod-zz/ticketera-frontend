import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../modelos/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketeraService {

  constructor(private http: HttpClient) { }

  /*getApiResponse( consulta: String ): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/ticket/' + consulta)
  }*/

  getApiResponse( consulta: String ): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('https://ticketera-mdambrosio.herokuapp.com/ticket/' + consulta)
  }

}
