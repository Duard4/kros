import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,  LoadingController  } from '@ionic/angular';
@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab3Page implements OnInit {
  data:any = [];
  data_students:any = [];

  showDetails:boolean[] = Array(1000).fill(false);
  dataURL = "https://api.jsonbin.io/v3/b/65e1da91266cfc3fde9191f9";
  loading:any;
  constructor(public LoadingController:LoadingController) { }

  ngOnInit() {
  }
  async load() {
    this.data_students = [];
    this.loading = await this.LoadingController.create({
      spinner: "bubbles",
      message: "loading..."
    });
    await this.loading.present();
    fetch(this.dataURL).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.data_students.push(this.data[i]);
          i++;
        }
        this.loading.dismiss();
      })
  }

  toggleDetails(i:number) {
    if (this.showDetails[i]) {
      this.showDetails[i]=false;
    }
    else {
      this.showDetails[i]=true;
    }
  }
  getColor(a:number, b:any) {
    b = parseFloat(b);
    return a >= b ? 'green' : '';
  }
}
