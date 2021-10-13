import { Component, OnInit } from '@angular/core';
import { RomanNumerals } from '../services/romanNumerals.service';

@Component({
  selector: 'app-romanos',
  templateUrl: './romanos.component.html',
  styleUrls: ['./romanos.component.css']
})

export class RomanosComponent implements OnInit {

  constructor(private servicioRomano: RomanNumerals) { }
  respuesta = ""
  numero = ""
  error = false
  ngOnInit(): void {
  }
  calcular() {
    
    if (this.numero.match("[a-zA-Z]+")) {
      this.respuesta = "No puede contener letras"
      this.error = false;
    }
    else if (this.numero == "") {
      this.respuesta = ""
      this.error = false;
    }
    else if (this.numero.match(".*\\s.*")) {
      this.respuesta = "No puede contener espacios"
      this.error = false;
    }
    else if(this.numero=="0"){
      this.respuesta="El 0 no existe"
      this.error=false;
    }
    else if (this.numero.length > 4 || parseInt(this.numero) > 1000) {
      this.respuesta = "Debe ser menor menor que 1000"
      this.error = false;
    }
    else {
      this.respuesta = this.servicioRomano.traducir(this.numero);
      this.error = true;
    }
  }

}
