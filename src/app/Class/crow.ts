import {bird} from "./bird";

export class crow extends bird {
    constructor(override name:string, override L:number) {
        super(name, L);
    }
    f(){
        return this.L*0.8;
    }
    show(){
        return `Вид: ${this.name}  Висота: ${this.L}  Необхідна кількість їжі: ${this.f()}`;
    }
}
