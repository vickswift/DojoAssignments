function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed) {
  if (!(this instanceof VehicleConstructor)) {
    return new VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed);
  }
  /*
  Addition of private variables to vehicle.
  */
  var self = this;
  var distance_travelled = 0;

/*
Addition of properties to ninja.
*/
  this.name = name || "unicycle";
  this.numberOfWheels = numberOfWheels || 1;
  this.numberOfPassengers = numberOfPassengers || 0;
  this.speed = speed || 80;

// String used to generate vin number
var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

// Invoke createVin to generate random vin number
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }
}


/*
Addition of methods to vehicle
*/
  VehicleConstructor.prototype.makeNoise = function() {
    console.log("Vehicle name is " + this.name );
  }
  VehicleConstructor.prototype.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }
  VehicleConstructor.prototype.checkMiles = function() {
    console.log(updateDistanceTravelled);
  }
  VehicleConstructor.prototype.updateDistanceTravelled = function() {
    self.distance_travelled += self.speed;
  }
}


//Create a Bus from VehicleConstructor
var car = new VehicleConstructor('Aston Martin', 4, 4, 55);
car.move().checkMiles();
console.log(car.speed);
