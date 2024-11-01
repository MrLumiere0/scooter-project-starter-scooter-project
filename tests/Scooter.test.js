const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter1 = new Scooter();
    expect(scooter1).toBeInstanceOf(Scooter);
  });
  test('Scooter user should be set to null', () => {
    const scooter2 = new Scooter();
    expect(scooter2.user).toBe(null);
  });
  test('Scooter serial number should start at one and increment for each new Scooter', () => {
    const scooter3 = new Scooter();
    expect(scooter3.serial).toBe(4);
  }); 
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooter = new Scooter('downtown');
  //rent method
  test('rent method should rent scooter to user', () => {
    scooter.rent('joe');
    expect(scooter.user).toBe('joe');
  });
  test('rent method should throw error if charge is less than or equal to 20', () => {
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
// test('requestRepair method should repair scooter after 5 seconds', () => {
//   scooter.isBroken = true;
//   scooter.requestRepair();
//   setTimeout(() => {
//     expect(scooter.isBroken).toBe(false);
//   }, 5000);
// })
//   //charge method
//   test('recharge method should charge scooter to 100% in increments of 10%', () => {
//     scooter.charge = 50;
//     scooter.recharge();
//     setTimeout(() => {
//       expect(scooter.charge).toBe(100);
//     }, 5000);
//   });

})
