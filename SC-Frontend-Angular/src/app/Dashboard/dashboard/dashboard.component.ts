import { Component } from '@angular/core';
import { GraficoComponent } from '../grafico/grafico.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GraficoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  BarGraphic = {
    type: 'bar', // Tipo de gráfico (barras, línea, etc.)
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'], // Etiquetas para el eje X
      datasets: [{
        label: 'Numero de Postulantes', // Nombre de la serie
        data: [12, 19, 3, 5, 2, 3, 7], // Datos a graficar
        backgroundColor: '#FA7578',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        datalabels: false,
        legend: {
          labels: {
            font: {
              size: 14,
              weight:'bold', // Tamaño de la letra para la leyenda
            },
            color: '#5b5e5c' // Color del texto (opcional)
          }
        }
      },
      elements: {
        bar: {
          borderRadius: 5, // Aplica bordes redondeados
        }
      }
    }
  };
  DounughtGraphic = {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [
        {
          label: 'My Dataset',
          data: [300, 50, 100, 40],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true, // Mantiene el gráfico responsivo
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'right'
        },
        tooltip: {
          enabled: false // Desactiva el tooltip al pasar el mouse
        },
        datalabels: {
          formatter: (value:any, context:any) => {
            const total = context.dataset.data.reduce((sum:number, val:number) => sum + val, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${percentage}%`; // Muestra el porcentaje
          },
          color: 'white', // Color de las etiquetas
          font: {
            weight: 'bold',
            size: 13
          },
          align: 'center', // Alineación dentro del arco
          anchor: 'center' // Posición dentro del arco
        }
      }
    }
  };
  
  PieGraphic = {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        label: 'My Dataset',
        data: [300, 50, 100, 40],
        backgroundColor: ['#C0FDB4', '#ADD6FF', '#FFCC95', '#CEC8FF'],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true, // Mantiene el gráfico responsivo
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'right'
        },
        tooltip: {
          enabled: false // Mostrar información al pasar el mouse
        },
        datalabels: {
          formatter: (value:any, context:any) => {
            const total = context.dataset.data.reduce((sum:number, val:number) => sum + val, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${percentage}%`; // Muestra el porcentaje
          },
          color: '#545454', // Color de las etiquetas
          font: {
            weight: 'bold',
            size: 13
          },
          align: 'center', // Alineación dentro del arco
          anchor: 'center' // Posición dentro del arco
        }
      }
      }
}
}
