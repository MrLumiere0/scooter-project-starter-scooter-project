const User = require('./User')
const Scooter = require('./Scooter')


const Mario = new User("Mario", "pass", 30)
class ScooterApp {

  constructor(){
    this.stations = {
      Station1: [],
      Station2: [],
      Station3: []
     }
    this.registeredUsers = { 
      Mario:Mario
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

      //  Check logic if this works after merge
       else if (age >= 18){
        const user = new User(username, password, age)
       return user
        
    }
  }
  
  }

   loginUser(username, password) {
    let userList = Object.keys(this.registeredUsers)
    return (userList)
  
    // if (this.userList.hasOwnProperty(username)) {
    //   // try {
    //     let index = this.registerUser(username)
    //     console.log(index)
    //     return (index)

    //   // }

    //   // catch {
    //   //  return ("Username or password is incorrect")
    //   // }
  
    // }

    // else if (!this.u.hasOwnProperty(username)) {
    //   return ("No such user is logged in")
    // }
  }

   logoutUser(username) {
    if (this.registeredUsers.hasOwnProperty(username)) {
         username.logout()
         console.log("User is logged out")
  
    }

    else if (!this.registeredUsers.hasOwnProperty(username)) {
      console.log("No such user is logged in")
    }
  }

  createScooter(station) {

    //  Check logic if this works after merge

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

      //  Check logic if this works after merge
  dockScooter (scooter, station){
    if(this.stations.hasOwnProperty(station)){
      if(this.stations[station].includes(scooter)){
        console.log("Scooter already docked")
      }
    

      else if(!this.stations[station].includes(scooter)){
        this.stations.station.push(scooter)
        scooter.station(station)
        console.log("Created new Scooter ")  }
  }


    else if(!this.stations.hasOwnProperty(station)){
        console.log("No such Station")
    }
  }

        //  Check logic if this works after merge 
  rentScooter(scooter, user) {
      let station = scooter.station
      if (scooter.station == null) {
        console.log("Scooter already rented")
      }

      else if(this.stations.hasOwnProperty(station)){

        try{
          station.filter(function (scooter) {
            return scooter !== scooter 
          })
          scooter.user = user
          console.log("scooter is")
        }

        catch{"error after station was validated"}
      }
  }

  print(){
    console.log(this.registeredUsers)
    console.log(this.stations)
}

 
}



  // const New = new (ScooterApp)
  // console.log(New.registerUser("Mario"))

module.exports = ScooterApp
