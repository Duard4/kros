import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}
  a: number = 0;
  b: number = 0;
  d: number = 0;
  ras(a: any, b: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.d = 0;
      if ((isNaN(this.a) == true) || (isNaN(this.b) == true) ) {
        throw new Error("Parametr is not a number!");
      }
      if (this.a > this.b) {
        throw new Error("Interval can not be created!");
      }
    }
    catch (error) {
      console.log(error);
    }
    let i: number;
    for (i = this.a; i <= this.b; i++) {
      if (i % 5 == 4 && i % 6 == 5)
        this.d += 1;
    }
  }
}
