import { Component } from '@angular/core';
import {
  Router,
  RouterOutlet,
  ActivatedRoute,
  RouterModule,
  RouterLink,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AsistenciaButtonComponent } from '../List/AsistenciaComponents/asistencia-button/asistencia-button.component';
import { TurnosButtonComponent } from '../List/AsistenciaComponents/turnos-button/turnos-button.component';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    AsistenciaButtonComponent,
    TurnosButtonComponent,
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'], // Corregido: styleUrl -> styleUrls
})
export class IndexComponent {
  mainRoute: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {
    // Escucha los eventos de navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute =
          this.route.firstChild?.snapshot.routeConfig?.path || './';
        this.activeTab = currentRoute;
        console.log('Ruta activa:', this.activeTab);
        const urlSegments = this.router.url.split('/'); // Divide la URL por "/"
        this.mainRoute = urlSegments[1] || ''; // Toma el primer segmento después de la raíz
      });
    
  }
  tabs = [
    { path: './', label: 'Lista' },
    { path: 'store', label: 'Crear' },
    { path: 'update', label: 'Editar' },
  ];
  activeTab = '';
}
