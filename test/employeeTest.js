const employeeTest = require('ava');
const {Employee} = require("../src/employee");

employeeTest('employee: given employee with name spike and type engineer when toString return employee info', t => {
    let employee;
    employee = new Employee('spike', 'engineer');
    t.is(employee.toString(), 'spike (engineer)');

})


employeeTest('employee: given employee with name spike and type unknown when new Employee throw error ', t => {
    let employee;
    try {
        new Employee('spike', 'unknown');
        t.fail();
    } catch (e) {
        t.is(e.message,'Employee cannot be of type unknown' );
    }
})