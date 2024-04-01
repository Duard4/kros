import { iShow } from "../interface/ishow";
import { Place } from "./place";

export class City extends Place  {
    constructor (name : string, population: number, area: number, shower:iShow) {
        super (name, population, area);
        shower.show(`Місто ${name}\nПопуляція: ${population}\nПлоща: ${area}\nГустота населення: ${this.density()}`);
    }
}