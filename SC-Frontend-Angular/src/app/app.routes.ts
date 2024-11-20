import { Routes } from '@angular/router';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { GestionarEntidadesComponent } from './Gestionar_entidades/gestionar-entidades/gestionar-entidades.component';
import { AsistenciaYTurnosComponent } from './Asistencia_y_turnos/asistencia-y-turnos/asistencia-y-turnos.component';
import { ReportesYCredencialesComponent } from './Reportes_y_Credenciales/reportes-y-credenciales/reportes-y-credenciales.component';
import { DistribucionDePersonalComponent } from './Distribucion_de_personal/distribucion-de-personal/distribucion-de-personal.component';
import { LogoutComponent } from './Logout/logout/logout.component';
import { CreateComponent } from './MainComponents/Create/create/create.component';
import { UpdateComponent } from './MainComponents/Update/update/update.component';
import { ListComponent } from './MainComponents/List/list/list.component';

export const routes: Routes = [
  {
    path: 'gestionar-entidades',
    component: GestionarEntidadesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'store', component: CreateComponent },
      { path: '**', redirectTo: '' }, // Por defecto muestra la lista completa
    ],
    data: {
      saludo: 'Hola desde la ruta de gestión de entidades',
      tableData: [
        { id: 101, product: 'Laptop', price: 1200 },
        { id: 102, product: 'Phone', price: 800 },
      ],
    },
  },
  {
    path: 'asistencia-y-turnos',
    component: AsistenciaYTurnosComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'store', component: CreateComponent },
      { path: '**', redirectTo: '' }, // Por defecto muestra la lista completa
    ],
    data: {
      saludo: 'Hola desde la ruta de asistencia y turnos',
      tableData: [
        { id: 10, product: 'Bici', price: 1200, tienda: 'Burguitos' },
        { id: 1, product: 'PC-gamer', price: 800, tienda: 'Burguitos' },
        { id: 1, product: 'laptop-gamer', price: 800, tienda: 'Burguitos' },
        { id: 1, product: 'mouse', price: 800, tienda: 'Burguitos' },
      ],
    },
  },
  {
    path: 'reportes-y-credenciales',
    component: ReportesYCredencialesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'store', component: CreateComponent },
      { path: '**', redirectTo: '' }, // Por defecto muestra la lista completa
    ],
    data: {
      saludo: 'Hola desde la ruta de reportes y credenciales',
      tableData: [
        { id: 10, product: 'Bici', price: 1200, tienda: 'Burguitos' },
        { id: 1, product: 'PC-gamer', price: 800, tienda: 'Burguitos' },
        { id: 1, product: 'laptop-gamer', price: 800, tienda: 'Burguitos' },
        { id: 1, product: 'mouse', price: 800, tienda: 'Burguitos' },
      ],
  },
  },
  {
    path: 'distribucion-de-personal',
    component: DistribucionDePersonalComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'store', component: CreateComponent },
      { path: '**', redirectTo: '' }, // Por defecto muestra la lista completa
    ],
    data: {
      saludo: 'Hola desde la ruta de distribución de personal',
      children: [
        { path: '', component: ListComponent },
        { path: 'update', component: UpdateComponent },
        { path: 'store', component: CreateComponent },
        { path: '**', redirectTo: '' }, // Por defecto muestra la lista completa
      ],
      tableData: [
        { id: 10, product: 'Bici', price: 1200, tienda: 'Burguitos' },
        { id: 1, product: 'PC-gamer', price: 800, tienda: 'Burguitos' },
        { id: 1, product: 'laptop-gamer', price: 800, tienda: 'Burguitos' },
        { id: 1, product: 'mouse', price: 800, tienda: 'Burguitos' },
      ],
    },
  },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: DashboardComponent }, // Ruta inicial// Ruta para "gestionar-entidades"
  { path: '**', redirectTo: '' },
  // Redirige cualquier ruta no encontrada a la página inicial
];
