const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((emp) => employeeName === emp.firstName || employeeName === emp.lastName);
}

module.exports = getEmployeeByName;
