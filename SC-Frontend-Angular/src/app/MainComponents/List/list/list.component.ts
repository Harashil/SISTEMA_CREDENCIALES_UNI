import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableComponent, SearchComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  tableData: any[] = [];
  code: string = '';
  dynamicColumns: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtén los datos de la ruta activa
    this.route.data.subscribe((data) => {
      if (data) {
        this.tableData = data['tableData'] || [];
        this.code = data['code'] || '';
        // Genera columnas dinámicas basadas en las claves del primer objeto
        this.dynamicColumns =
          this.tableData.length > 0 ? Object.keys(this.tableData[0]) : [];
      }
    });
  }

  onSearch(event: { option: string; text: string }) {
    console.log('Opción seleccionada:', event.option);
    console.log('Texto buscado:', event.text);
  }
  get columns() {
    return (this.dynamicColumns =
      this.tableData.length > 0 ? Object.keys(this.tableData[0]) : []);
  }
}
