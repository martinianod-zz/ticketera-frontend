import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoFirestoreComponent } from './pages/listado-firestore/listado-firestore.component';
import { ListadoRealtimeComponent } from './pages/listado-realtime/listado-realtime.component';
import { TicketeraComponent } from './pages/ticketera/ticketera.component';

const routes: Routes = [
  { path: '', redirectTo: 'ticketera', pathMatch: 'full' },
  { path: 'ticketera', component: TicketeraComponent },
  { path: 'quien-atiende-mas-tickets', component: TicketeraComponent }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
