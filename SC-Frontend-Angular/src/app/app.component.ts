import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { BarraLateralComponent } from './MainComponents/barra-lateral/barra-lateral.component';
import { EncabezadoComponent } from './MainComponents/encabezado/encabezado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, BarraLateralComponent, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'ng-front-CS';
}
