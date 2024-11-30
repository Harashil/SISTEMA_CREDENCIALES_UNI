import { Input, Output, EventEmitter, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() columnsToSearch: string[] = []; 
  @Output() search = new EventEmitter<{ option: string; text: string }>();

  selectedOption: string = ''; // Opción seleccionada actualmente
  searchText: string = ''; // Texto ingresado en el campo de búsqueda

  ngOnInit() {
    // Seleccionar la primera opción por defecto, si existe
    if (this.columnsToSearch.length > 0) {
      this.selectedOption = this.columnsToSearch[0];
    }
    console.log('Opciones de búsqueda:', this.columnsToSearch[0]);
  }

  // Emitir los datos de búsqueda cuando cambia la opción
  onOptionChange() {
    this.emitSearch();
  }

  // Emitir los datos de búsqueda cuando cambia el texto
  emitSearch() {
    this.search.emit({
      option: this.selectedOption,
      text: this.searchText
    });
  }
}
