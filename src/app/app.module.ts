import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoFirestoreComponent } from './pages/listado-firestore/listado-firestore.component';
import { ListadoRealtimeComponent } from './pages/listado-realtime/listado-realtime.component';
import { FormSubirArchivosComponent } from './componentes/form-subir-archivos/form-subir-archivos.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketeraComponent } from './pages/ticketera/ticketera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListadoFirestoreComponent,
    ListadoRealtimeComponent,
    FormSubirArchivosComponent,
    TicketeraComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
