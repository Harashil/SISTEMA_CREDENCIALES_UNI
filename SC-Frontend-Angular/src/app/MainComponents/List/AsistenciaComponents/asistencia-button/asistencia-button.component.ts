import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-asistencia-button',
  standalone: true,
  imports: [],
  templateUrl: './asistencia-button.component.html',
  styleUrl: './asistencia-button.component.css'
})
export class AsistenciaButtonComponent {
  @Input() label: string='';
}
