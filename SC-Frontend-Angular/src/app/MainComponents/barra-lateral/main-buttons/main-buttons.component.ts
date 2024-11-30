import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-main-buttons',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main-buttons.component.html',
  styleUrl: './main-buttons.component.css'
})
export class MainButtonsComponent {
  @Input() label: string = '';
  @Input() iconRoute: string = '';
  @Input() routeIdentificator: string = '';
  showOptions = false; // Controla la visibilidad de las opciones
  hoverTimeout: any;   // Almacena el temporizador
  isActive: boolean = false;
  private routerSubscription!: Subscription;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfActive();
      }
    })};
    ngOnDestroy(): void {
      // Limpia la suscripción para evitar fugas de memoria
      this.routerSubscription.unsubscribe();
    }

  private checkIfActive(): void {
    // Comparar la ruta actual con la asociada al botón
    this.isActive = this.router.url === this.routeIdentificator;
  }



  preventDefault(event:any): void {
    event.stopPropagation();
}

  click(): void {
    // Lógica adicional al hacer clic en el botón
    this.showOptions=!this.showOptions;
  }
  startHover(): void {
    // Muestra las opciones después de 1 segundo
    this.hoverTimeout = setTimeout(() => {
      this.showOptions = true;
    }, 500); // 1 segundo
  }

  stopHover(): void {
    // Cancela el temporizador y oculta las opciones
    setTimeout(() => {
    clearTimeout(this.hoverTimeout);
    this.showOptions = false;
    }, 300); // 0.3 segundos
  }

  
}
