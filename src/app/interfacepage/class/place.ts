import { iDensity } from '../interface/idensity';
import {iTags} from '../interface/itags'

export abstract class Place implements iTags, iDensity  {
    name : string;
    population: number;
    area: number;
    constructor(name : string, population: number, area: number) {
        this.name = name;
        this.population = population;
        this.area = area;
    }
    density(): number {
        return parseFloat((this.population/this.area).toFixed(2));
    }
}