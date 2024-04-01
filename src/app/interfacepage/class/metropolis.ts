import { iShow } from "../interface/ishow";
import { Place } from "./place";

export class Metropolis extends Place {
    constructor(name: string, population: number, area: number, shower: iShow) {
        super(name, population, area);
        if (this.checkIfMetropolis()) {
            shower.show(`Мегаполіс: ${name}; Популяція: ${population}; Площа: ${area}; Густота населення: ${this.density()}`);
        }
        else
            shower.show(`Це НЕ мегаполіс: ${name}; Популяція: ${population}; Площа: ${area}; Густота населення: ${this.density()}`);
    }
    checkIfMetropolis() {
        return this.population > 1000000
    }
}