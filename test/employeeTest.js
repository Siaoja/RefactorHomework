const employeeTest = require('ava');

employeeTest('foo', t => {
    t.pass();
});

employeeTest('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});
