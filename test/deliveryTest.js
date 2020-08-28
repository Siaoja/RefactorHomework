const deliveryTest = require('ava');
const {deliveryDate} = require("../src/delivery");

deliveryTest('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});

