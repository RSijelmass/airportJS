describe('airport', function() {
  var airport;
  beforeEach(function(){
    airport = new Airport(20);
  });
  it('initializes with the capacity', function(){
    expect(airport.capacity).toEqual(20);
  });
});
