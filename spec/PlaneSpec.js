describe('Plane', function() {
	var plane;

	beforeEach(function() {
		plane = new Plane();
	});
				
	describe('land', function() {
		it('plane confirms it is in airport', function() {
			plane.Land();
			expect(plane.inAirport).toBe(true)
		});	
	});
	
	describe('leave', function() {
		it('plane confirms it has left airport', function() {
			plane.Land();
			plane.Leave();
			expect(plane.inAirport).toBe(false);
		});
	});
});
