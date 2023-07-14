import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Palabras } from '../Model/Palabras';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {

  }

  Url='http://localhost:8080/Ahorcado/palabras';

  getPalabras(){
    return this.http.get<Palabras[]>(this.Url);
  }
}
