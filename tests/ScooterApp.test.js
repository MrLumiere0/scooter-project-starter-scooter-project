const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  })



// Log in
test("Can login User correctly", () => {
  const user = "Mario"
  const pass = "pass"
  let response = scooterApp.loginUser(user, pass)
  expect(response).toBe("User is logged in")



  });

// Log in




// log out



})

// rent scooter

// dock scooter

