import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  saludo: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Obtén los datos de la ruta activa
    this.route.data.subscribe((data) => {
      console.log('Datos recibidos:', data);
      this.saludo = data['saludo'] || '';
    });
  }
}
