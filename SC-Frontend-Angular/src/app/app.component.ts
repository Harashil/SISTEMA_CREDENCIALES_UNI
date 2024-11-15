import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from './MainComponents/barra-lateral/barra-lateral.component';
import { EncabezadoComponent } from './MainComponents/encabezado/encabezado.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, BarraLateralComponent, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-front-CS';
}
