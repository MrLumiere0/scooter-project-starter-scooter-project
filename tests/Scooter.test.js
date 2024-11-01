const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooter = new Scooter('downtown', 'joe', 1, 100, false);
  //rent method
  test('rent method should rent scooter to user', () => {
    scooter.rent('joe');
    expect(scooter.user).toBe('joe');
  });
  test('rent method should throw error if charge is less than 20', () => {
    scooter.charge = 10;
    expect(() => {
      scooter.rent('joe');
    }).toThrow('scooter needs to charge');
  });
  test('rent method should throw error if scooter is broken', () => {
    scooter.charge = 100;
    scooter.isBroken = true;
    expect(() => {
      scooter.rent('joe');
    }).toThrow('scooter needs repair');
  });

  //dock method
  test('dock method should dock scooter at station', () => {
    scooter.dock('downtown');
    expect(scooter.station).toBe('downtown');
  });

  //requestRepair method
test('requestRepair method should repair scooter', () => {
  scooter.isBroken = true;
  scooter.requestRepair();
  setTimeout(() => {
    expect(scooter.isBroken).toBe(false);
  }, 5000);
})
  //charge method
  test('charge method should charge scooter to 100%', () => {
    scooter.charge = 50;
    scooter.charge1();
    setTimeout(() => {
      expect(scooter.charge).toBe(100);
    }, 5000);
  });

})
