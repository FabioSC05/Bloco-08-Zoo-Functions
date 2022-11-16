const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ages = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      ages.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      ages.adult += 1;
    }
    if (element.age >= 50) {
      ages.senior += 1;
    }
  });
  return ages;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  let values = 0;
  values += countEntrants(entrants).child * prices.child;
  values += countEntrants(entrants).adult * prices.adult;
  values += countEntrants(entrants).senior * prices.senior;
  return values;
}

module.exports = { calculateEntry, countEntrants };
