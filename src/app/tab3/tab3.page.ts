import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgFor],
})
export class Tab3Page {
  constructor() {}
  a: number[][] = [];
  n: number = 0;
  arrayras(n: any) {
    this.a = [];
    try {
      this.n = parseInt(n);
      if (isNaN(this.n) == true) {
        throw new Error("N is not a number!");
      }
      if (this.n <= 0) {
        throw new Error("N is less or equal zero!");
      }
      let i: number, j: number;
      this.a = Array(this.n)
      console.log("Array created");
      for (i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);
        for (j = 0; j < this.n; j++) {
          let aa:number = i*(j+2*i)+j+1;
          this.a[i][j] = aa;
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  getColor(b: number) {
    return (b <25 && b%2) ? '#41EAD4' : 'none';
  }
  ngOnInit() { }
}
