  import { CommonModule } from '@angular/common';
  import { Component, Input, OnInit } from '@angular/core';
  import { NumRowsService } from '../../../services/num-rows.service';
  import { Router } from '@angular/router';
  @Component({
    selector: 'app-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
  })
  export class TableComponent {
    @Input() data: any[] = [];
    @Input() forRefreshData:number=0;
    @Input() code: string = '';
    currentRoute: string = '';
    newRoute:string = '';
    
    constructor(protected NumRowsService: NumRowsService, private router: Router) {}
    

    ngOnInit(): void {
      // Obtener solo la ruta principal
      this.currentRoute = this.getMainRoute();
      this.newRoute = this.currentRoute.replaceAll('-', '');
    }
    private getMainRoute(): string {
      const currentUrl = this.router.url;
      const path = currentUrl.split('/')[1];  // Toma el primer segmento de la URL
      return path || '';  // Si no hay ruta principal, devuelve una cadena vacía
    }

    // Array de objetos que representan las filas de la tabla.
    get columns(): string[] {
      // Devuelve las claves del primer objeto (nombres de columnas)
      return this.data.length > 0 ? Object.keys(this.data[0]) : [];
    }
    currentPage: number = 1; 
    // Obtiene los datos paginados para la página actual
    get paginatedData(): any[] {
      if (5 === parseInt(this.NumRowsService.dynamicRows[this.newRoute])){
        this.NumRowsService.defaultRows = 5;
        const startIndex = (this.currentPage - 1) * this.NumRowsService.defaultRows;
        return this.data.slice(startIndex, startIndex + this.NumRowsService.defaultRows);
      }
      else{
        const startIndex = (this.currentPage - 1) * parseInt(this.NumRowsService.dynamicRows[this.newRoute]);//Recibe el valor respectivo y lo convierte a entero
        return this.data.slice(startIndex, startIndex + parseInt(this.NumRowsService.dynamicRows[this.newRoute]));//Recibe el valor respectivo y lo convierte a entero
      }
    }
    toInt(num:number): boolean {
      const value = this.NumRowsService.dynamicRows[this.currentRoute];
      return parseInt(value, 10) !== num; // Asegúrate de convertir correctamente el valor a número
    }
    
    setDynamicRows(rows: string): void {
      this.NumRowsService.setNumber(rows, this.newRoute);
    } 

    // Calcula el número total de páginas
    get totalPages(): number {
      return Math.ceil(this.data.length / parseInt(this.NumRowsService.dynamicRows[this.newRoute]));
    }

    // Cambia a una página específica
    changePage(page: number): void {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
