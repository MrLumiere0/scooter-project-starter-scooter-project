const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  // Hello
  test('should create a new User object with correct properties and able to login', () => {
    const user1 = new User('testUser', 'testPassword', 25);
    
    expect(user1.login('testPassword')).toBe(true); // Should be false upon registration
});

test('should not log the user in with the incorrect password', () => {
    const user2 = new User('testUser', 'testPassword', 25);

    expect(() => {
        // Call the function that is expected to throw an error
        user2.login('');
    }).toThrow('Incorrect Password'); 
});


test('should log the user out', () => {
    const user3 = new User('testUser', 'testPassword', 25);

    expect(user3.login('testPassword')).toBe(true); // Verify logged in
    user3.logout();
    expect(() => {
        // Call the function that is expected to throw an error
        user3.logout();
    }).toThrow('You cannot logout as you are not logged in'); 
});

test('User cannot log out if not logged in', () => {
    const user3 = new User('testUser', 'testPassword', 25);

     // Verify logged in
   
    expect(() => {
        // Call the function that is expected to throw an error
        user3.logout();
    }).toThrow('You cannot logout as you are not logged in'); 
});
  // test age
})


// test login

// test logout
