class Scooter{
  static nextSerial = 1
  // scooter code here
  constructor(station){
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }
  rent(user){
  if(this.charge <= 20)  throw new Error('scooter needs to charge')
  if(this.isBroken) throw new Error('scooter needs repair')
  else {
    this.user = user
    this.station = null
    //console.log('Scooter rented to ' + user)}
}
  }
dock(station){
  this.station = station
  this.user = null
  //console.log('Scooter docked at ' + station)
  }

//   async recharge() {
//     console.log('Starting charge');
//     while(this.charge < 100) {
//       await new Promise(resolve => setTimeout(resolve, 1000)); 
//       this.charge += 10;
//       if (this.charge > 100) this.charge = 100;
//         //console.log('Charge is now at ' + this.charge + '%');
//     }
//      console.log('Charge complete');  
// }
//   requestRepair(){
//     setTimeout(() => {
//       this.isBroken = false
//       //console.log('Scooter repaired')
//     }, 5000)
//   }
}
module.exports = Scooter
