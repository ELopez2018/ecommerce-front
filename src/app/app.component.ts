import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Centro Comercial Virtual Chinchiná - Emall';
  constructor() {
    if (environment.production) {
      console.log("Ejecusión en Producción");
    } else {
      console.log("Ejecusión de Desarrollo");
    }

  }
}
