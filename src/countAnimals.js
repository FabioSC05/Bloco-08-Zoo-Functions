const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = {};
  if (animal === undefined) {
    species.forEach((element) => {
      const names = element.name;
      animals[names] = element.residents.length;
    });
    return animals;
  }
  if (animal.sex === 'male') {
    return species.find((element) => animal.specie === element.name).residents
      .filter((counter) => animal.sex === counter.sex).length;
  }
  if (animal.sex === 'female') {
    return species.find((element) => animal.specie === element.name).residents
      .filter((counter) => animal.sex === counter.sex).length;
  }
  return species.find((element) => animal.specie === element.name).residents.length;
}

module.exports = countAnimals;
