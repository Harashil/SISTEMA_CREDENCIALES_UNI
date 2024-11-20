import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @Input() title: string= '';
  saludo: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Obtén los datos de la ruta activa
    this.route.data.subscribe((data) => {
      this.saludo = data['saludo'] || '';
    });
  }
}
