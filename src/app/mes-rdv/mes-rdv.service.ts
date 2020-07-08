import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rdv} from '../model/Rdv';
import {Observable} from 'rxjs';

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

  find(id): Observable<Rdv> {
    return this.http.get<Rdv>('http://localhost:3000/rdv/' + id);
  }

  update(rdv: Rdv): Observable<Rdv> {
    return this.http.put<Rdv>('http://localhost:3000/rdv/' + rdv.id, rdv);
  }

  load(): void {
    this.http.get<Array<Rdv>>('http://localhost:3000/rdv')
      .subscribe( mesRdvs => this.mesRdvs = mesRdvs, error => console.log(error));
  }
}
