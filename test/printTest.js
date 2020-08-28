const printTest = require('ava');
const {printOwing} = require("../src/print");


printTest('given invoice with customer and borderSpacing when printOwing return data result', t => {
    const invoice = {
        "customer": "spike",
        "borderSpacing": [
            {amount: 10},
            {amount: 20}
        ]
    };
    let today = new Date();
    let plusDay = new Date();
    plusDay.setDate(today.getDate() + 30)


    const result = printOwing(invoice);
    t.is(result, '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: spike\n'+
        'amount: 30\n' +
        'amount: '+plusDay.toLocaleDateString())
});
