import { Component } from '@angular/core';
import Chart from 'chart.js/auto'; 
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Input, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
Chart.register(ChartDataLabels);
@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [],
  templateUrl: './grafico.component.html',
styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  @Input() config: any; // Recibe la configuración completa del gráfico
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>; // Obtiene el canvas

  ngOnInit() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, this.config); // Crea el gráfico con la configuración recibida
    } else {
      console.error('Failed to get 2D context');
    }
  }
}
