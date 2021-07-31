import { Component, OnInit } from '@angular/core';
import { TicketeraService } from './../../servicios/ticketera.service';
import { Ticket } from './../../modelos/ticket';

@Component({
  selector: 'app-ticketera',
  templateUrl: './ticketera.component.html',
  styleUrls: ['./ticketera.component.css']
})
export class TicketeraComponent implements OnInit {

  tickets?: Ticket[];
  currentIndex = -1;

  constructor(private ticketeraService: TicketeraService) {

   }

  ngOnInit(): void {
  }

}
