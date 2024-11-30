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
      { path: 'empleados', 
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 101, product: 'Laptop', price: 1200 },
            { id: 102, product: 'Phone', price: 800 },
            { id: 103, product: 'Phone', price: 800 },
            { id: 104, product: 'Phone', price: 800 },
            { id: 105, product: 'Phone', price: 800 },
            { id: 106, product: 'Phone', price: 800 },
            { id: 107, product: 'Phone', price: 800 },
          ],
        },
        children: [
          {
            path: 'update',
              component: UpdateComponent,
              data: {
               saludo: 'Hola desde la ruta de gestión de entidades',  
             }, },
           { 
            path: 'store', 
             component: CreateComponent,
             data: {
               saludo: 'Hola desde la ruta de gestión de entidades',
             }, 
            },
        ]
      },
      { path: 'docentes', 
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 101, product: 'docentes', price: 1200 },
            { id: 102, product: 'Phone', price: 800 },
            { id: 103, product: 'Phone', price: 800 },
            { id: 104, product: 'Phone', price: 800 },
            { id: 105, product: 'Phone', price: 800 },
            { id: 106, product: 'Phone', price: 800 },
            { id: 107, product: 'Phone', price: 800 },
          ],
        },
        children: [
          {
            path: 'update',
              component: UpdateComponent,
              data: {
               saludo: 'Hola desde la ruta de gestión de entidades',  
             }, },
           { 
            path: 'store', 
             component: CreateComponent,
             data: {
               saludo: 'Hola desde la ruta de gestión de entidades',
             }, 
            },
        ]
      },
      { path: 'sectores', 
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 101, product: 'docentes', price: 1200 },
            { id: 102, product: 'Phone', price: 800 },
            { id: 103, product: 'Phone', price: 800 },
            { id: 104, product: 'Phone', price: 800 },
            { id: 105, product: 'Phone', price: 800 },
            { id: 106, product: 'Phone', price: 800 },
            { id: 107, product: 'Phone', price: 800 },
          ],
        },
        children: [
          {
            path: 'update',
              component: UpdateComponent,
              data: {
               saludo: 'Hola desde la ruta de gestión de entidades',  
             }, },
           { 
            path: 'store', 
             component: CreateComponent,
             data: {
               saludo: 'Hola desde la ruta de gestión de entidades',
             }, 
            },
        ]
      },
      { path: 'pabellones', 
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 101, product: 'docentes', price: 1200 },
            { id: 102, product: 'Phone', price: 800 },
            { id: 103, product: 'Phone', price: 800 },
            { id: 104, product: 'Phone', price: 800 },
            { id: 105, product: 'Phone', price: 800 },
            { id: 106, product: 'Phone', price: 800 },
            { id: 107, product: 'Phone', price: 800 },
          ],
        },
        children: [
          {
            path: 'update',
              component: UpdateComponent,
              data: {
               saludo: 'Hola desde la ruta de gestión de entidades',  
             }, },
           { 
            path: 'store', 
             component: CreateComponent,
             data: {
               saludo: 'Hola desde la ruta de gestión de entidades',
             }, 
            },
        ]
      },
      { path: 'aulas', 
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 101, product: 'docentes', price: 1200 },
            { id: 102, product: 'Phone', price: 800 },
            { id: 103, product: 'Phone', price: 800 },
            { id: 104, product: 'Phone', price: 800 },
            { id: 105, product: 'Phone', price: 800 },
            { id: 106, product: 'Phone', price: 800 },
            { id: 107, product: 'Phone', price: 800 },
          ],
        },
        children: [
          {
            path: 'update',
              component: UpdateComponent,
              data: {
               saludo: 'Hola desde la ruta de gestión de entidades',  
             }, },
           { 
            path: 'store', 
             component: CreateComponent,
             data: {
               saludo: 'Hola desde la ruta de gestión de entidades',
             }, 
            },
        ]
      },
      { path: 'asignaciones', 
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 101, product: 'docentes', price: 1200 },
            { id: 102, product: 'Phone', price: 800 },
            { id: 103, product: 'Phone', price: 800 },
            { id: 104, product: 'Phone', price: 800 },
            { id: 105, product: 'Phone', price: 800 },
            { id: 106, product: 'Phone', price: 800 },
            { id: 107, product: 'Phone', price: 800 },
          ],
        },
        children: [
          {
            path: 'update',
              component: UpdateComponent,
              data: {
               saludo: 'Hola desde la ruta de gestión de entidades',  
             }, },
           { 
            path: 'store', 
             component: CreateComponent,
             data: {
               saludo: 'Hola desde la ruta de gestión de entidades',
             }, 
            },
        ]
      },
      { path: 'pagos', 
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 101, product: 'docentes', price: 1200 },
            { id: 102, product: 'Phone', price: 800 },
            { id: 103, product: 'Phone', price: 800 },
            { id: 104, product: 'Phone', price: 800 },
            { id: 105, product: 'Phone', price: 800 },
            { id: 106, product: 'Phone', price: 800 },
            { id: 107, product: 'Phone', price: 800 },
          ],
        },
        children: [
          {
            path: 'update',
              component: UpdateComponent,
              data: {
               saludo: 'Hola desde la ruta de gestión de entidades',  
             }, },
           { 
            path: 'store', 
             component: CreateComponent,
             data: {
               saludo: 'Hola desde la ruta de gestión de entidades',
             }, 
            },
        ]
      },
      { path: '**', redirectTo: '/empleados' }, // Por defecto muestra la lista completa
    ],
    
  },
  {
    path: 'asistencia-y-turnos',
    component: AsistenciaYTurnosComponent,
    children: [
      { path: '', component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de asistencia y turnos',
          forRefreshData: 5,
          tableData: [
            { id: 101, product: 'Laptop', price: 1200},
            { id: 102, product: 'Phone', price: 800},
            { id: 103, product: 'Tablet', price: 500},
          ],
        },
       },
      {path: 'gestion-de-asistencia', 
        component: ListComponent,
        data: {
          code: '1',
          forRefreshData: 5,
          tableData: [
            { id: 101, product: 'Laptop', price: 1200, Presente: 'X', Ausente:'', Justificado:'' },
            { id: 102, product: 'Phone', price: 800, Presente: '', Ausente:'X', Justificado:''},
            { id: 103, product: 'Tablet', price: 500, Presente: '', Ausente:'', Justificado:'X' },
            
          ],
        },
       },
       {path: 'gestion-de-actividades', 
        component: ListComponent,
        data: {
          code: '2',
          forRefreshData: 5,
          tableData: [
            { id: 101, product: 'Laptop', price: 1200, Cumplió: 'X',Parcial:'', Incumplió:'' },
            { id: 102, product: 'Phone', price: 800, Cumplió: '', Parcial:'X', Incumplióo:''},
            { id: 103, product: 'Tablet', price: 500, Cumplió: '', Parcial:'', Incumplió:'X' },
            
          ],
        },
       },
      { path: 'update', component: UpdateComponent },
      { path: 'store', component: CreateComponent },
      { path: '**', redirectTo: '' }, // Por defecto muestra la lista completa
    ],
    
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
        { id: 301, product: 'Gaming Laptop', price: 2500, brand: 'Alienware', warranty: '2 years' },
        { id: 302, product: 'VR Headset', price: 400, brand: 'Meta', warranty: '1 year' },
        { id: 303, product: 'Smartphone', price: 999, brand: 'Apple', warranty: '1 year' },
        { id: 304, product: '4K TV', price: 1500, brand: 'Samsung', warranty: '3 years' },
        { id: 305, product: 'Drone', price: 1200, brand: 'DJI', warranty: '2 years' },
        { id: 306, product: 'Wireless Earbuds', price: 200, brand: 'Sony', warranty: '1 year' },
        { id: 307, product: 'Gaming Chair', price: 300, brand: 'Secretlab', warranty: '5 years' },
        { id: 308, product: 'Mechanical Keyboard', price: 150, brand: 'Logitech', warranty: '1 year' },
        { id: 309, product: 'External SSD (1TB)', price: 120, brand: 'Samsung', warranty: '1 year' },
        { id: 310, product: 'Smart Home Speaker', price: 100, brand: 'Amazon', warranty: '2 years' },
      ],            
  },
  },
  {
    path: 'distribucion-de-personal',
    component: DistribucionDePersonalComponent,
    children: [
      { path: '',
        component: ListComponent,
        data: {
          saludo: 'Hola desde la ruta de gestión de entidades',
          tableData: [
            { id: 201, product: 'Apple', price: 1.2, category: 'Fruits', stock: 120 },
            { id: 202, product: 'Milk', price: 0.99, category: 'Dairy', stock: 60 },
            { id: 203, product: 'Bread', price: 2.5, category: 'Bakery', stock: 30 },
            { id: 204, product: 'Cheese', price: 4.8, category: 'Dairy', stock: 45 },
            { id: 205, product: 'Eggs (dozen)', price: 3.0, category: 'Poultry', stock: 100 },
            { id: 206, product: 'Chicken Breast', price: 7.5, category: 'Meat', stock: 50 },
            { id: 207, product: 'Rice (1kg)', price: 1.9, category: 'Grains', stock: 80 },
            { id: 208, product: 'Pasta (500g)', price: 1.3, category: 'Grains', stock: 90 },
            { id: 209, product: 'Orange Juice (1L)', price: 2.8, category: 'Beverages', stock: 70 },
            { id: 210, product: 'Cereal', price: 3.5, category: 'Breakfast', stock: 40 },
          ],   
        },
      },
      { path: 'update', component: UpdateComponent },
      { path: 'store', component: CreateComponent },
      { path: '**', redirectTo: '' }, // Por defecto muestra la lista completa
    ],
  },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: DashboardComponent }, // Ruta inicial// Ruta para "gestionar-entidades"
  { path: '**', redirectTo: '' },
  // Redirige cualquier ruta no encontrada a la página inicial
];
