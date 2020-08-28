const printTest = require('ava');


printTest('foo', t => {
    t.pass();
});

printTest('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});
//
// printTest('pintOwing function test', t => {
//     let invoice = {
//         'borderSpacing':[],
//         'dueDate':{},
//     }
//     invoice.customer = 'spike';
//     invoice.borderSpacing = [{'amount': 4},{'amount': 5},{'amount': 6},{'amount': 7}];
//
// });
