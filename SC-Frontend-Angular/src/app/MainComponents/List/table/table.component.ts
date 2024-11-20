import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() data: any[] = []; // Array de objetos que representan las filas de la tabla.

  get columns(): string[] {
    // Devuelve las claves del primer objeto (nombres de columnas)
    return this.data.length > 0 ? Object.keys(this.data[0]) : [];
  }
}
