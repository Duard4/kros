import { iShow } from "../interface/ishow";
import { Place } from "./place";

export class Region extends Place {
    constructor (name : string, population: number, area: number, shower:iShow) {
        super (name, population, area);
        shower.show(`${name} область\nПопуляція: ${population}\nПлоща: ${area}\nГустота населення: ${this.density()}`);
    }
}