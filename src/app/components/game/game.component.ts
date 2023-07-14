import { Component, OnInit } from '@angular/core';
import { palabras } from './palabras';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  palabra = ''; //palabra
  palabraOculta = ''; //palabra oculta, cantidad de letras
  intentos = 0; //intentos
  win = false; //ganador
  lost = false; //perdedor

  //array de letras
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
  }

  ngOnInit(): void { //metodo que se ejecuta despues que angular termine de inicializar el componente 
    let numeroRandom = Math.floor(Math.random() * palabras.length);
    this.palabra = palabras[numeroRandom];
    this.palabraOculta = '_ '.repeat(this.palabra.length);
    console.log(this.palabra);
  }

  verificar(letra: string){
    if ((document.getElementById('btn-' + letra) as HTMLInputElement) === null){
      return true;
    }
    if ((document.getElementById('btn-' + letra) as HTMLInputElement).disabled === true){
      return true;
    }
    (document.getElementById('btn-' + letra) as HTMLInputElement).disabled = true;

    //verificamos concidencias en la palabra dependiendo de la letra pulsada
    if (this.palabra.indexOf(letra) === -1) {
      //caso contrario aumenta los intentos
      this.intentos++;
    }

    //dividimos la palabra oculta en un array 
    const palabraOcultaArray = this.palabraOculta.split(' ');

    //verificamos que la letra coincina con alguna en la palabra
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        //si hay coincidencias, en el array de la palabra oculta sera reemplazada
        palabraOcultaArray[i] = letra;
      }
    }

    //luego unerimos los elementos del array y se lo asignamos a la palabra oculta para ser mostrada
    this.palabraOculta = palabraOcultaArray.join(' ');
    this.verificarJuego();
    return null;
  }

  verificarJuego() {
    //dividimos la palabra oculta
    const arrayPalabra = this.palabraOculta.split(' ');
    //unimos la palabra
    const verificaPalabra = arrayPalabra.join('');
    if (verificaPalabra === this.palabra) {
      this.win = true;
    }
    if (this.intentos >= 6) {
      this.lost = true;
    }
  }
  
  //Metodo que nos permite recargar la página
  reload() {
    window.location.reload();
  }

}
