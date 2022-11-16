const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployees(obj) {
  return employees
    .find((emp) => emp.id === obj.id || emp.firstName === obj.name || emp.lastName === obj.name);
}

function getSpecies(obj) {
  const employee = getEmployees(obj);
  const animals = [];
  employee.responsibleFor.forEach((spcId) => {
    const specie = species.find((spc) => spc.id === spcId);
    animals.push(specie.name);
  });
  return animals;
}

function getLocations(obj) {
  const employee = getEmployees(obj);
  const locations = [];
  employee.responsibleFor.forEach((spcId) => {
    const specie = species.find((spc) => spc.id === spcId);
    locations.push(specie.location);
  });
  return locations;
}

function result(obj) {
  const employee = getEmployees(obj);
  const specie = getSpecies(obj);
  const location = getLocations(obj);
  const object = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: specie,
    locations: location,
  };
  return object;
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return employees.map((element) => result({ name: element.firstName }));
  }
  if (getEmployees(obj) === undefined) {
    throw new Error('Informações inválidas');
  }
  return result(obj);
}

module.exports = getEmployeesCoverage;
