import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutantesService {
mutantes:any[]=[];
  constructor(private http:HttpClient) { 
    console.log("Servicio mutantes en uso");
    this.cargar_mutantes();
  }
  cargar_mutantes(){
    this.http.get("assets/data/mutantes.json").subscribe(respuesta=>{
     
      console.log(respuesta);
      this.mutantes=respuesta.mutantes;
    })

  }
}
