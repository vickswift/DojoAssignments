function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed) {
  if (!(this instanceof VehicleConstructor)) {
    return new VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed);
  }
  /*
  Addition of private variables to vehicle.
  */
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function() {
    self.distance_travelled += self.speed;
    // console.log(self.distance_travelled);
  }

/*
Addition of properties to ninja.
*/
  this.name = name || "unicycle";
  this.numberOfWheels = numberOfWheels || 1;
  this.numberOfPassengers = numberOfPassengers || 0;
  this.speed = speed || 80;
/*
Addition of methods to vehicle
*/
  this.makeNoise = function() {
    console.log("Vehicle name is " + this.name );
  }
  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function() {
    console.log(updateDistanceTravelled);
  }
}


//Create a Bus from VehicleConstructor
var car = new VehicleConstructor('Aston Martin', 4, 4, 55);
car.move();
car.checkMiles();
console.log(car.speed);
