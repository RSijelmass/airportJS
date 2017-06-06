describe('Weather', function() {
	var weather;
	
	beforeEach(function() {
		weather = new Weather();
	});

	describe('randomNumber', function() {
		it('returns a random number between 1 and 10', function() {
			expect(weather.randomNumber()).toBeGreaterThan(0);
			expect(weather.randomNumber()).toBeLessThan(11);
		});
	});
	
	describe('bad weather', function() {
		it('should return bad weather if weather < 2', function() {
			spyOn(weather,'randomNumber').and.returnValue(1);
			expect(weather.isBad()).toBe(true);			
		});
	});

});
