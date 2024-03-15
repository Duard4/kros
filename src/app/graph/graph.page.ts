import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { Chart, registerables } from 'chart.js'
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgFor]
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = 0;
  xk: number = 0;
  a: number = 0;
  h: number = 0;
  xx: string[] = [];
  yy: string[] = [];
  data1: string[] = [];
  constructor() { Chart.register(...registerables); }

  ngOnInit() {
  }

  graphras(xn: any, xk: any, a: any, h: any) {
    this.data1 = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number, y: number, i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.xk) {
      if (x <= 0) {
        y = Math.pow(Math.E, x)*Math.log(Math.abs(x))*Math.tan((3*x-1)*(3*x-1));
      }
      else if (x <= this.a) {
        y = 5/(Math.tan(x * 2 + 3)+1)
      }
      else {
        y = (3*x-1)*(3*x-1)/(Math.pow(x , 5) + Math.sin(Math.pow(x+2, 3)))
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(y.toFixed(1));
      let s = "x = " + x.toFixed(1) + " y = " + y.toFixed(1);
      this.data1.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();

  }
  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement,{
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: '',
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy, 
            spanGaps: false,
          }
        ]
      }
    });
  }
}