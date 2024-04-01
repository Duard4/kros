import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Lab6PageModule } from './lab6.module'
// import {IonicPage} from '@ionic/angular'

// @IonicPage()
@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule, Lab6PageModule],
})
export class Lab6Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
