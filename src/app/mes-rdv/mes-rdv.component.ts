import { Component, OnInit } from '@angular/core';
import {Rdv} from '../model/Rdv';
import {MesRdvService} from './mes-rdv.service';

@Component({
  selector: 'app-mes-rdv',
  templateUrl: './mes-rdv.component.html',
  styleUrls: ['./mes-rdv.component.css']
})
export class MesRdvComponent implements OnInit {

  constructor(private mesRdvService: MesRdvService) { }

  list(): Array<Rdv> {
    return this.mesRdvService.findAll();
  }

  ngOnInit(): void {
  }

  confirm(id: number): void {
  }
  cancel(id: number): void {
  }
}
