import {iShow} from '../interface/ishow'

export class ShowDesk implements iShow {
    info = "";
    show(s:string) {
        this.info = `Інформація про місце ${s}`;
    }
}