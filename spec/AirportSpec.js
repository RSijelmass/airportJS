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
  });

	describe('plane leaves airport', function() {
    beforeEach(function(){
      weather = new Weather()
      airport2 = new Airport(20, weather)
      plane = new Plane();
      airport2.LandInAirport(plane);
    })
		it('allows plane to leave the airport', function() {
      spyOn(weather, 'isBad').and.returnValue(false);
			airport2.LeaveAirport(plane);
			expect(airport2.planes).toEqual([]);
		});
    it('throws an error when weather is bad', function(){
      spyOn(weather, 'isBad').and.returnValue(true);
      expect(airport2.LeaveAirport).toThrow('weather is too bad')
    });
	});
});
