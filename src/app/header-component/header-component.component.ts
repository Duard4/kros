import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent  implements OnInit {
  @Input() name : string = "Лабораторні роботи";
  constructor() { }

  ngOnInit() {}

}
