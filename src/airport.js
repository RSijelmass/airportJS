function Weather() {
	this.randomNumber = function() {
			return Math.floor(Math.random() * 10) + 1
	};

	this.isBad = function() {
		if(this.randomNumber() < 2) {
			return true;
		} else {
			return false;
		}
	};
};

function Airport(capacity = 20, weather = new Weather()) {
  this.capacity = capacity;
  this.planes = [];
  this.weather = weather;

  this.LandInAirport = function(plane){
    this.planes.push(plane)
	};

	this.LeaveAirport = function(plane) {
    if(this.weather.isBad()){
      throw('weather is too bad')
    };
    this.planes.pop(plane)
  };
};

// Airport.prototype.LandInAirport = function(plane){
//   planes.push(plane)
// };

airport = new Airport(40)
// console.log(airport.capacity)
// console.log(airport.planes)
// airport.LandInAirport('plane')
// console.log(airport.planes)
console.log(airport.weather.isBad())
