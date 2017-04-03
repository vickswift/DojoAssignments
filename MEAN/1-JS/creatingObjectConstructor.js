function VehicleConstructor(name, numberOfWheels, numberOfPassengers) {
  var vehicle = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  vehicle.name = name || "unicycle";
  vehicle.numberOfWheels = numberOfWheels || 1;
  vehicle.numberOfPassengers = numberOfPassengers || 0;
/*
Addition of methods to vehicle
*/
  vehicle.makeNoise = function() {
    console.log("Vehicle with name " + vehicle.name + "make noise");
  }
/*
return vehicle
*/
  return vehicle;
}

//Create a Bike from VehicleConstructor
var Bike = VehicleConstructor('Smooth Ride', 2, 1);
// Redefine the makeNoise method for a particular "Instance" or Object
Bike.makeNoise = function() {
  console.log("ring ring!")
}
Bike.makeNoise();


//Create a Sedan from VehicleConstructor
var Sedan = VehicleConstructor('School Bus', 8, 21);
// Redefine the makeNoise method for a particular "Instance" or Object
Sedan.makeNoise = function() {
  console.log('Honk Honk!');
}
Sedan.makeNoise();


//Create a Bus from VehicleConstructor
var Bus = VehicleConstructor('SJ School Bus', 4, 4);
// Redefine the makeNoise method for a particular "Instance" or Object
Bus.pickUpStudent = function(numberOfPassengersToPickup) {
  var passengersCount = numberOfPassengersToPickup + Bus.numberOfPassengers;
  console.log(passengersCount);
  return passengersCount;
  }
Bus.pickUpStudent(5);
