import {bird} from "./bird";

export class stork extends bird {
    constructor(override name:string, override L:number) {
        super();
    }
    f(){
        return this.L*1/2000;
    }
    show(){
        return `Вид: ${this.name}  Розмах крил: ${this.L}  Необхідна кількість їжі: ${this.f()}`;
    }
}
