import { Drink } from '../src/drink';
import { CoffeeMachine } from '../src/coffeeMachine';

describe('CoffeeMachine errors', () => {
    it('throws error on too much sugar', () => {
        const machine = new CoffeeMachine();

        const drink = new Drink("Coffee", 2, false, 6, "small");

        const wrapper = () => machine.serve(drink, 2, false, 10);
        expect(wrapper).toThrow("Too much sugar");
    });

    it('throws error on too much sugar alt', () => {
        const machine = new CoffeeMachine();

        const drink = new Drink("Coffee", 2, false, 6, "small");

        try {
            machine.serve(drink, 2, false, 10);
        } catch (error) {
            expect(error).toEqual(new Error("Too much sugar"))
        }
    });

    it('throws error on too much sugar alt', () => {
        const machine = new CoffeeMachine();

        const drink = new Drink("Coffee", 2, false, 0, "small");

        try {
            machine.serve(drink, 1, false, 10);
        } catch (error) {
            expect(error).toEqual(new Error("Not enough money"))
        }
    });
});