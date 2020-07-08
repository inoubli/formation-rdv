import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PraticienComponent } from './praticien/praticien.component';
import { RdvComponent } from './rdv/rdv.component';
import { MesRdvComponent } from './mes-rdv/mes-rdv.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ListParticienComponent } from './list-particien/list-particien.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PraticienComponent,
    RdvComponent,
    MesRdvComponent,
    MenuComponent,
    LoginComponent,
    ListParticienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
