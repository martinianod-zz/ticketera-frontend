import { Component } from '@angular/core';
import { MensajesFirestoreService } from 'src/app/servicios/mensajes-firestore.service';
import {Mensajes} from 'src/app/modelos/mensajes';
import { TicketeraService } from './servicios/ticketera.service';
import { Ticket } from './modelos/ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-node-mongo-2021';
  unMensaje:Mensajes= new Mensajes();

  tickets?: Ticket[];
  titulo?: String

  constructor(private ticketeraService: TicketeraService) {}

  callApiTicketera(titulo: String , consulta: String){
    this.ticketeraService.getApiResponse(consulta).subscribe(data=>{
      this.tickets = data;
      this.titulo = titulo;
    });
  }

}
