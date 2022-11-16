const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((check) => id === check.managers.find((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((check) => managerId === check.managers
    .find((manager) => manager === managerId))
    .map((name) => `${name.firstName} ${name.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
