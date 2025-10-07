import { Drink } from '../src/drink';
import { CoffeeMachine } from '../src/coffeeMachine';

describe('CoffeeMachine basic', () => {
  it('serves small coffee with exact money', () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 10)).toBe("Serving Coffee (small)");
  });

  it('serves tea and returns change', () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Tea", 1.5, false, 0, "small");

    expect(machine.serve(drink, 4, false, 10)).toBe("Serving Tea (small) with change 2.50");
  });

  it('applies milk surcharge', () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, true, 0, "medium");

    expect(machine.serve(drink, 2.70, false, 10)).toBe("Serving Coffee (medium)");
  });

  it('applies sugar surcharge above 2 cubes', () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Cappuccino", 3, false, 4, "small");

    expect(machine.serve(drink, 3.20, false, 10)).toBe("Serving Cappuccino (small)");
  });
});
