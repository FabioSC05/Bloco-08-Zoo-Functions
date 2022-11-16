const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ages) {
  return species.find((spec) => spec.name === animal).residents.every((resid) => resid.age >= ages);
}

module.exports = getAnimalsOlderThan;
