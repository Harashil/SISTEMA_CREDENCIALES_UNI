import { Component } from '@angular/core';
import { MainButtonsComponent } from './main-buttons/main-buttons.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [RouterLink,MainButtonsComponent],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {

}
