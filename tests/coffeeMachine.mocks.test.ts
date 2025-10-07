import { Drink } from '../src/drink';
import { CoffeeMachine } from '../src/coffeeMachine';
import * as notifications from '../src/utils/notifications';

describe('CoffeeMachine notifications (mocks)', () => {
    const notifyUserSpy = jest.spyOn(notifications, "notifyUser").mockImplementation(jest.fn());

    beforeEach(() => {
        jest.resetAllMocks()
    });

    it ('notifies user about serving drink', () => {
        const machine = new CoffeeMachine();

        const drink = new Drink("Coffee", 2, false, 0, "small");

        machine.serve(drink, 2, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith("Serving Coffee (small)");
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    });

    it ('notifies user about serving drink 2', () => {
        const machine = new CoffeeMachine();

        const drink = new Drink("Latte", 3.50, false, 0, "medium");

        machine.serve(drink, 4, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith("Serving Latte (medium)");
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    });
});
