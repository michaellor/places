describe('Place', function() {
  it("creates a new place with the given properties.", function(){
  var testPlace = new Place("Maui","Hawaii","Beach", "Summer");
  expect(testPlace.placeName).to.equal("Maui")
  expect(testPlace.placeLocation).to.equal("Hawaii");
  expect(testPlace.placeLandmark).to.equal("Beach");
  expect(testPlace.placeTime).to.equal("Summer");
  });

});
