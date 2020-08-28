const employeeTest = require('ava');
const {Employee} = require("../src/employee");

employeeTest('employee: given employee with name spike and type engineer when toString return employee info', t => {
    let employee;
    employee = new Employee('spike', 'engineer');
    t.is(employee.toString(), 'spike (engineer)');

})

