import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  tableData: any[] = [];
  saludo: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtén los datos de la ruta activa
    this.route.data.subscribe((data) => {
      this.tableData = data['tableData'] || [];
      this.saludo = data['saludo'] || '';
      console.log('Datos recibidos:', data);
    });
  }
}
