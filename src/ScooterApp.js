const User = require('./User')
const Scooter = require('./Scooter')


const Mario = new User("Mario", "pass", 30)

class ScooterApp {

  constructor(){
    this.stations = {
      "Station1": [],
      "Station2": [],
      "Station3": []
     }
    this.registeredUsers = { 
      "Mario":Mario
     }

  }

  registerUser(username, password, age) {
    if (this.registeredUsers.hasOwnProperty(username)) {
      return "User already registerd"
    }

    else if(!this.registeredUsers.hasOwnProperty(username)){
       if (age <= 17){
        console.log("Too young to register")
       }

       else if (age >= 18){
       const user = new User(username, password, age)
       return user
        
    }
  }
  
  }

   loginUser(username, password) {  
    let user = this.registeredUsers[username]

      if (user) {
        try {
            user.login(password)
            return ("User is logged in")
        }

      catch (err) {
        console.log(err)
       return ("Username or password is incorrect")
      }
  
    }

    else if (!this.username.hasOwnProperty(username)) {
      return ("No such user is logged in")
    }
  }



   logoutUser(username) {
    let user = this.registeredUsers[username]
    if (user) {
      try {
        user.logout()
        return "User is logged out"
      }

      catch(err){
        return err
      }
    }

    else if (!user) {
     return("No such user is logged in")
    }
  }

  createScooter(station) {
    let place = this.stations


    if(this.stations.hasOwnProperty(station)) {
      const newScooter = new Scooter(station);
      newScooter.station = station;
      this.stations[station].push(newScooter)
      console.log("Created new Scooter")
    } 

  else {
    console.log("No such station")
  }
}


  rentScooter(scooter, user) {
    let station = scooter.station

    if (station) {
      return "Scooter already rented"
    }

    else if(station == null){   
        scooter.rent(user)
        return "Scooter is rented"
    }

}


dockScooter (scooter, station){
  let facility = scooter.station 

  if(facility == station){
      return "Scooter is docked"  }

  else if((!this.stations.hasOwnProperty(station))){
          return "No such station"
      }
  }
  


  print(){
    console.log(this.registeredUsers)
    console.log(this.stations)
}
}



module.exports = ScooterApp
