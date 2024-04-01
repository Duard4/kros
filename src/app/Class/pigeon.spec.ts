import { pigeon } from './pigeon';

describe('Pigeon Testing', () => {
    let myPigeon: pigeon;
    beforeEach(() => {
        myPigeon = new pigeon('Pigeon', 9);
    });
    it('Create a class example', () => {
        expect(myPigeon).toBeTruthy();
    });
    it('Create a class example with L <= 0', () => {
        expect(()=> new pigeon('Pigeon', -15)).toThrow(new Error('L <= 0'));
    });
    it('Calculate the amount of food', () => {
        let f = myPigeon.f();
        let calc = 9*1.2;
        expect(f.toFixed(2)).toBe(calc.toFixed(2));
    });
    it('Check show', () => {
        let show = myPigeon.show();
        let check = `Вид: ${myPigeon.name}  Висота: ${myPigeon.L}  Необхідна кількість їжі: ${myPigeon.f()}`;
        expect(show.startsWith(check)).toBeTruthy();
    });
})