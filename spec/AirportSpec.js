describe('airport', function() {
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });

  describe('initialize airport', function (){
    it('initializes with the capacity', function(){
      airport2 = new Airport(40)
      expect(airport2.capacity).toEqual(40);
    });
    it('without capacity given, initializes with default', function(){
      expect(airport.capacity).toEqual(20);
    });
  });

  describe ('land in airport', function(){
    it('takes in a plane', function(){
      plane = new Plane();
      airport.LandInAirport('plane')
      expect(airport.planes).toEqual(["plane"]);
    });
  });

	describe('plane leaves airport', function() {
		it('allows plane to leave the airport', function() {
			plane = new Plane();
			airport.LandInAirport('plane');
			airport.LeaveAirport('plane');
			expect(airport.planes).toEqual([]);
		});
	});
});
