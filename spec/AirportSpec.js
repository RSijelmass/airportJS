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
      airport.LandInAirport(plane)
      expect(airport.planes).toEqual([plane]);
    });
    it('throws an error when capacity is full', function (){
      airport3 = new Airport(1, weather)
      spyOn(weather, 'isBad').and.returnValue(true);
      airport3.LandInAirport(plane);
      // airport3.LandInAirport(plane);
      expect(airport3.LandInAirport).toThrow('capacity full')
    });
  });

	describe('plane leaves airport', function() {
    beforeEach(function(){
      weather = new Weather()
      plane = new Plane();
      airport2.LandInAirport(plane);
    })
		it('allows plane to leave the airport', function() {
      airport2 = new Airport(20, weather)
      spyOn(weather, 'isBad').and.returnValue(false);
			airport2.LeaveAirport(plane);
			expect(airport2.planes).toEqual([]);
		});
    it('throws an error when weather is bad', function(){
      airport2 = new Airport(20, weather)
      spyOn(weather, 'isBad').and.returnValue(true);
      expect(airport2.LeaveAirport).toThrow('weather is too bad')
    });
	});
});
