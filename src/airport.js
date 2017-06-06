function Airport(capacity = 20) {
  this.capacity = capacity;
  this.planes = [];

  this.LandInAirport = function(plane){
    this.planes.push(plane)
	};

	this.LeaveAirport = function(plane) {
		this.planes.pop(plane)				
  };
}

// Airport.prototype.LandInAirport = function(plane){
//   planes.push(plane)
// };

airport = new Airport(40)
console.log(airport.capacity)
console.log(airport.planes)
airport.LandInAirport('plane')
console.log(airport.planes)
