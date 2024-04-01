import {iShow} from '../interface/ishow'

export class ShowCon implements iShow {
    show(s:string) {
        console.log(s);
    }
}