const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const NE = species.filter((element) => element.location === 'NE');
const NW = species.filter((element) => element.location === 'NW');
const SE = species.filter((element) => element.location === 'SE');
const SW = species.filter((element) => element.location === 'SW');

function includeNames() {
  const object = {
    NE: NE.map((element) => ({ [element.name]: element.residents.map((animal) => animal.name) })),
    NW: NW.map((element) => ({ [element.name]: element.residents.map((animal) => animal.name) })),
    SE: SE.map((element) => ({ [element.name]: element.residents.map((animal) => animal.name) })),
    SW: SW.map((element) => ({ [element.name]: element.residents.map((animal) => animal.name) })),
  };
  return object;
}

function includeNamesSorted() {
  const object = {
    NE: NE.map((element) => ({ [element.name]: element.residents
      .map((animal) => animal.name).sort() })),
    NW: NW.map((element) => ({ [element.name]: element.residents
      .map((animal) => animal.name).sort() })),
    SE: SE.map((element) => ({ [element.name]: element.residents
      .map((animal) => animal.name).sort() })),
    SW: SW.map((element) => ({ [element.name]: element.residents
      .map((animal) => animal.name).sort() })),
  };
  return object;
}

function male() {
  const object = {
    NE: NE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name) })),
    NW: NW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name) })),
    SE: SE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name) })),
    SW: SW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name) })),
  };
  return object;
}

function maleSorted() {
  const object = {
    NE: NE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name).sort() })),
    NW: NW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name).sort() })),
    SE: SE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name).sort() })),
    SW: SW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'male').map((animal) => animal.name).sort() })),
  };
  return object;
}

function female() {
  const object = {
    NE: NE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name) })),
    NW: NW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name) })),
    SE: SE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name) })),
    SW: SW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name) })),
  };
  return object;
}

function femaleSorted() {
  const object = {
    NE: NE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name).sort() })),
    NW: NW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name).sort() })),
    SE: SE.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name).sort() })),
    SW: SW.map((element) => ({ [element.name]: element.residents
      .filter((select) => select.sex === 'female').map((animal) => animal.name).sort() })),
  };
  return object;
}

function animals() {
  const object = {
    NE: NE.map((element) => element.name),
    NW: NW.map((element) => element.name),
    SE: SE.map((element) => element.name),
    SW: SW.map((element) => element.name),
  };
  return object;
}

function includeNamesOnly(options) {
  if (options.sorted === true) {
    return includeNamesSorted();
  }
  return includeNames();
}

function maleOnly(options) {
  if (options.sorted === true) {
    return maleSorted();
  }
  return male();
}

function femaleOnly(options) {
  if (options.sorted === true) {
    return femaleSorted();
  }
  return female();
}

function maleAndFemale(options) {
  if (options.sex === 'male') {
    return maleOnly(options);
  }
  return femaleOnly(options);
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames !== true) {
    return animals();
  }
  if (options.sex === 'male' || options.sex === 'female') {
    return maleAndFemale(options);
  }
  return includeNamesOnly(options);
}

module.exports = getAnimalMap;
