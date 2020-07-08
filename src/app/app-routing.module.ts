import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesRdvComponent } from './mes-rdv/mes-rdv.component';
import { PraticienComponent } from './praticien/praticien.component';
import { ListParticienComponent } from './list-particien/list-particien.component';


const routes: Routes = [
  { path: 'mes-rendez-vous', component: MesRdvComponent }, {
    path: "praticien", component: ListParticienComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
