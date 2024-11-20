import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas definidas en app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Provee las rutas configuradas
    provideZoneChangeDetection({ eventCoalescing: true }), // Activa el cambio de zona para optimizar el rendimiento
    
  ]
};

