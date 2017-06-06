function Plane(){
	this.inAirport = false;

	this.Land = function() {
		this.inAirport = true;
	};

	this.Leave = function() {
		this.inAirport = false;
	};
}

// plane = new Plane();
// console.log(plane.inAirport);
// plane.Land();
// console.log(plane.inAirport);
