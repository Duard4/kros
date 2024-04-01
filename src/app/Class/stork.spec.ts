import { stork } from './stork';

describe('Stork Testing', () => {
    let myStork: stork;
    beforeEach(() => {
        myStork = new stork('Stork', 150);
    });
    it('Create a class example', () => {
        expect(myStork).toBeTruthy();
    });
    it('Create a class example with L <= 0', () => {
        expect(()=> new stork('Stork', -150)).toThrow(new Error('L <= 0'));
    });
    it('Calculate the amount of food', () => {
        let f = myStork.f();
        let calc = 150*1/2000;
        expect(f.toFixed(2)).toBe(calc.toFixed(2));
    });
    it('Check show', () => {
        let show = myStork.show();
        let check = `Вид: ${myStork.name}  Розмах крил: ${myStork.L}  Необхідна кількість їжі: ${myStork.f()}`
        expect(show.startsWith(check)).toBeTruthy();
    });
    
    
})