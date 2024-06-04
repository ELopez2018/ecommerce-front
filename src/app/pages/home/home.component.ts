import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textMain =`Es un municipio colombiano ubicado en el Departamento de Caldas, a 18 km de la capital
  Manizales. Cuenta con 53.184 habitantes, su extensión territorial es de 112.4 km² y en sus territorios se
  cultiva café para exportación`
  constructor() { }

  ngOnInit() {
  }

}
