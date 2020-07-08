import { Injectable } from '@angular/core';
import { Praticien } from '../model/Praticien';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PraticienService {
    praticiens: Array<Praticien> = new Array<Praticien>();
    urlBase: string = "http://localhost:3000/praticien";
    constructor(private http: HttpClient) {
        this.load();
    }
    load() {
        this.http.get<Array<Praticien>>(this.urlBase).subscribe(res => {this.praticiens = res;
        console.log(res)});
    }
    findAll(): Array<Praticien> {
        return this.praticiens;
      }


}