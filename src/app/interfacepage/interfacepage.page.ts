import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Place } from './class/place';
import { City } from './class/city';
import { Region } from './class/region';
import { Metropolis } from './class/metropolis';
import { ShowDesk } from './class/show-desk';
import { ShowCon } from './class/show-con';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InterfacepagePage implements OnInit {
  places: Place[] = [];
  show : string = "";
  constructor() { }
  ngOnInit() {
  }
  getRandomInt(min:number, max:number){
    return Math.floor(Math.random()*(max - min + 1) + min);
  }
  ras(){
    let desc_show = new ShowDesk();
    let con_show = new ShowCon();
    let city = new City("Київ", 2952301, 835.58, con_show);
    let metropolis = new Metropolis("Київ", 2952301, 835.58, con_show);
    let notmetropolis = new Metropolis("Київ", 52301, 835.58, con_show);

    let region = new Region("Київська",  1800000, 28131, desc_show);
    console.log(region.density())
    console.log(city.density())
    this.show = desc_show.info;
  }    
}
