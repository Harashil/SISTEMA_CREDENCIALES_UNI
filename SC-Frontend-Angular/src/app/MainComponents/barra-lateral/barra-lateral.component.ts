import { Component } from '@angular/core';
import { MainButtonsComponent } from './main-buttons/main-buttons.component';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [MainButtonsComponent],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {

}
