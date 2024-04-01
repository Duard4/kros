import { crow } from "./crow";

describe('Crow Testing', () => {
    let myCrow: crow;
    beforeEach(() => {
        myCrow = new crow('Crow', 15);
    });
    it('Create a class example', () => {
        expect(myCrow).toBeTruthy();
    });
    it('Create a class example with L <= 0', () => {
        expect(()=> new crow('Crow', -15)).toThrow(new Error('L <= 0'));
    });
    it('Calculate the amount of food', () => {
        let f = myCrow.f();
        let calc = 15*0.8;
        expect(f.toFixed(2)).toBe(calc.toFixed(2));
    });
    it('Check show', () => {
        let show = myCrow.show();
        let check = `Вид: ${myCrow.name}  Висота: ${myCrow.L}  Необхідна кількість їжі: ${myCrow.f()}`
        expect(show.startsWith(check)).toBeTruthy();
    });
})