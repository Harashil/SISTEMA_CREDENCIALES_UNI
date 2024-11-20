import { Component } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'] // Corregido: styleUrl -> styleUrls
})
export class IndexComponent {
  tabs = [
    { path: 'store', label: 'Crear' },
    { path: 'update', label: 'Editar' },
    { path: './', label: 'Lista' }
  ];
  activeTab = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    // Escucha los eventos de navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.route.firstChild?.snapshot.routeConfig?.path || './';
        this.activeTab = currentRoute;
      });
  }
}

