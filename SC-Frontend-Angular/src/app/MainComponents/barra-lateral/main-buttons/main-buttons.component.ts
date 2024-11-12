import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-buttons',
  standalone: true,
  imports: [],
  templateUrl: './main-buttons.component.html',
  styleUrl: './main-buttons.component.css'
})
export class MainButtonsComponent {
  @Input() label: string = 'Inicio';
}
