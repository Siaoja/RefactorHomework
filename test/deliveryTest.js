const deliveryTest = require('ava');
const {deliveryDate} = require("../src/delivery");

deliveryTest('deliveryDate given anOrder with MA and isRush with true return 2', t => {
    let isRush = true;
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (plusDeliveryTime) => {
                return plusDeliveryTime;
            }
        }
    };
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 2);
});