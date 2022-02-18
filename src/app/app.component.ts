import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre: string = "";
  telefono = "";
  dni = 0;

 

  cambiaDni(valor: any) {
    // Podes consultar el valor por consola
    console.log(valor);
    this.dni = valor;
  }

  onClick() {
    alert('Hiciste click!!');
  }
  
  constructor(){}

  ngOnInit(): void {
      
  }
}

