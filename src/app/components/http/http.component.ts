import { MutantesService } from './../../services/mutantes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {

  constructor(public _ms:MutantesService) {

   }



}
