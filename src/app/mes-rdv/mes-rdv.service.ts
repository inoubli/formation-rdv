import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rdv} from '../model/Rdv';

@Injectable({
  providedIn: 'root'
})
export class MesRdvService {

  mesRdvs: Array<Rdv> = new Array<Rdv>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Rdv> {
    return this.mesRdvs;
  }

  load(): void {
    this.http.get<Array<Rdv>>('http://localhost:3000/rdv')
      .subscribe( mesRdvs => this.mesRdvs = mesRdvs, error => console.log(error));
  }
}
