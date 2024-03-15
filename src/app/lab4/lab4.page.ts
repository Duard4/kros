import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {bird} from '../Class/bird';
import { crow } from './../Class/crow';
import { stork } from './../Class/stork';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab4Page implements OnInit {
  birds: bird[] = [];
  sum:number = 0;
  constructor() { }
  getRandomInt(min:number, max:number){
    return Math.floor(Math.random()*(max - min + 1) + min);
  }
  ras(nn:any){
    this.birds = [];
    this.sum = 0;
    let n = parseInt(nn);
    for (let i = 0; i < n; i++) {
      this.birds.push(new stork("Лелека", this.getRandomInt(200, 220)));
      this.birds.push(new crow("Ворона", this.getRandomInt(29, 35)));
    }
    this.birds.forEach((element)=> {
      console.log(element.show());
      this.sum+=element.f();
    })
    this.sum = Number(this.sum.toFixed(2));
  }

  ngOnInit() {
  }
}
