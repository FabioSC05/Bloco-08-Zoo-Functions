const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Teste se não receber parâmetros retorna o esperado', () => {
    const result = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(result);
  });
  it('Teste se o parâmetro dia for segunda sempre retorna fechado', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '04:00-PM')).toBe(closed);
  });
  it('Teste se o parâmetro dia e hora retorna aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Thursday', '01:00-PM')).toBe('The zoo is open');
  });
  it('Teste se o parâmetro dia e hora retorna fechado', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
    expect(getOpeningHours('Friday', '02:00-AM')).toBe(closed);
  });
  it('Teste se o parâmetro hora está correto', () => {
    expect(() => { getOpeningHours('Wednesday', 'Carro'); }).toThrowError(new Error('The hour should represent a number'));
    expect(() => { getOpeningHours('Wednesday', 'Moto'); }).toThrowError(new Error('The hour should represent a number'));
  });
  it('Teste se o parâmetro hora recebe AM ou PM', () => {
    expect(() => { getOpeningHours('Saturday', '09:00'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
    expect(() => { getOpeningHours('Sunday', '04:00'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Teste se o parâmetro hora recebe as horas e os minutos no formato correto', () => {
    expect(() => { getOpeningHours('Saturday', '14:00-PM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
    expect(() => { getOpeningHours('Sunday', '18:00-PM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
    expect(() => { getOpeningHours('Saturday', '02:80-PM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
    expect(() => { getOpeningHours('Sunday', '10:90-AM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Teste se o parâmetro dia recebe um dia da semana em inglês', () => {
    expect(() => { getOpeningHours('Segunda', '09:00-AM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
    expect(() => { getOpeningHours('Sexta', '04:00-PM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
});
