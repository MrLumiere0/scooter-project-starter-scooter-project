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

// log out

test("Can logout user correctly", () =>{
  const user = "Mario";
  // const user = "Luigi";
  let response = scooterApp.logoutUser(user)
  expect(response).toBe("User is logged out")
})


//dock scooter
test("Can dock Scooter", () => {
  const newScoo = new Scooter("station1")
  const station = "station4"
  let response = scooterApp.dockScooter(newScoo,station)
  expect(response).toBe("No such station")
})


// rent scooter

test("Can rent Scooter", () => {
  const newScoo = new Scooter(null)
  const Mario = new User("Mario", "pass", 30)
  let response = scooterApp.rentScooter(newScoo,Mario)
  expect(response).toBe("Scooter is rented")
})

})

