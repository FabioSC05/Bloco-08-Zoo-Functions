const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => specie.id === ids.find((number) => number === specie.id));
}

module.exports = getSpeciesByIds;
