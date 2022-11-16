const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Teste se não colocar nenhum parâmetro retorna nulo', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Teste se colocar um parâmetro errado retorna nulo', () => {
    expect(handlerElephants('idades')).toBe(null);
    expect(handlerElephants('sex')).toBe(null);
  });
  it('Teste se não colocar como parâmetro uma strig retorna a frase correta', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Teste se count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Teste se names retorna um array com todos os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(Array.isArray(handlerElephants('names'))).toBe(true);
  });
  it('Teste se averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Teste se location retorna a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Teste se popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Teste se availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(Array.isArray(handlerElephants('availability'))).toBe(true);
  });
});
