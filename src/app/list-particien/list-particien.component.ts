import { Component, OnInit } from '@angular/core';
import { PraticienService } from './particien.service';

@Component({
  selector: 'app-list-particien',
  templateUrl: './list-particien.component.html',
  styleUrls: ['./list-particien.component.css']
})
export class ListParticienComponent implements OnInit {

  constructor(private praticienService: PraticienService) {
  
   }
list(){
  return this.praticienService.findAll();
}
  ngOnInit(): void {
  }

}
