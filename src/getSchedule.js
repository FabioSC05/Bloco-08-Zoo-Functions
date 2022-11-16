const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function daysOfWeek(scheduleTarget) {
  const animalElements = species.filter((element) => scheduleTarget === element.availability
    .find((day) => day === scheduleTarget));
  const dayTime = Object.values(hours)
    .find((element, index) => Object.keys(hours)[index] === scheduleTarget);
  const schedule = {};
  if (scheduleTarget === 'Monday') {
    schedule.officeHour = 'CLOSED';
    schedule.exhibition = 'The zoo will be closed!';
    return schedule;
  }
  schedule.officeHour = `Open from ${dayTime.open}am until ${dayTime.close}pm`;
  schedule.exhibition = animalElements.map((element) => element.name);
  return schedule;
}

function daysOrAnimals(scheduleTarget) {
  const animals = species.find((element) => element.name === scheduleTarget);
  const days = Object.keys(hours).find((element) => element === scheduleTarget);
  let object = {};
  if (scheduleTarget === days) {
    object = { [days]: daysOfWeek(scheduleTarget) };
    return object;
  }
  if (scheduleTarget === animals.name) {
    return animals.availability;
  }
}

function getSchedule(scheduleTarget) {
  const animals = species.find((element) => element.name === scheduleTarget);
  const days = Object.keys(hours).find((element) => element === scheduleTarget);
  if ((days === undefined && animals === undefined) || scheduleTarget === undefined) {
    const objeto = {};
    Object.keys(hours).forEach((element) => {
      objeto[element] = daysOfWeek(element);
    });
    return objeto;
  }
  return daysOrAnimals(scheduleTarget);
}

module.exports = getSchedule;
