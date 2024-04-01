import { InterfacepagePage } from './../interfacepage/interfacepage.page';
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HeaderComponentComponent} from './../header-component/header-component.component';

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [HeaderComponentComponent],
})
export class Lab6PageModule {

}