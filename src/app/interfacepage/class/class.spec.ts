import { City } from "./city";
import { Metropolis } from "./metropolis";
import { Region } from "./region"
import { ShowCon } from "./show-con";
import { ShowDesk } from "./show-desk";

describe("Тестування класів", () => {
    let desc_show : ShowDesk;
    let con_show : ShowCon;
    let city : City;
    let metropolis : Metropolis;
    let notmetropolis : Metropolis;
    let region : Region;

    beforeEach(()=> {
        desc_show = new ShowDesk();
        con_show = new ShowCon();
        city = new City("Київ", 2952301, 835.58, con_show);
        metropolis = new Metropolis("Київ", 2952301, 835.58, con_show);
        notmetropolis = new Metropolis("Київ", 52301, 835.58, con_show);
        region = new Region("Київська",  1800000, 28131, con_show);
    })

    it("Створення єкземпляру класу ShowDesk", ()=> {
        expect(desc_show).toBeTruthy();
    })
    it("Створення єкземпляру класу ShowCon", ()=> {
        expect(con_show).toBeTruthy();
    })
    it("Створення єкземпляру класу City", ()=> {
        expect(city).toBeTruthy();
    })
    it("Створення єкземпляру класу Metropolis", ()=> {
        expect(metropolis).toBeTruthy();
    })
    it("Створення єкземпляру класу Region", ()=> {
        expect(region).toBeTruthy();
    })
    it("Перевірка чи Мегаполіс (ТАК) ", ()=> {
        expect(metropolis.checkIfMetropolis()).toBeTruthy();
    })
    it("Перевірка чи Мегаполіс (НІ)", ()=> {
        expect(notmetropolis.checkIfMetropolis()).toBeFalsy();
    })
    it("Розрахунок густоти населення ", ()=> {
        expect(region.density() == parseFloat
        ((region.population/region.area).toFixed(2))).toBeTruthy();
    })
})