const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((emp) => emp.id === id);
  const animalId = employee.responsibleFor.find((animal) => animal === employee.responsibleFor[0]);
  const selected = species.find((specie) => specie.id === animalId);
  const older = selected.residents.reduce((acc, cur) => (acc > cur.age ? acc : cur.age), 0);
  const equal = selected.residents.find((element) => element.age === older);
  const final = [equal.name, equal.sex, equal.age];
  return final;
}

module.exports = getOldestFromFirstSpecies;
