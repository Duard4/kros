export abstract class bird {
    name!: string;
    L!: number;
    constructor(name:string, l:number) {
        if (l<=0) throw new Error('L <= 0');
        this.name = name;
        this.L = l;
    }
    abstract show():any;
    abstract f(): any;
}