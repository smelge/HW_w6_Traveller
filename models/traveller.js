const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(function(location){
    return location.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(location){
    return location.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // map the journeys to create an array of distances
  const distances = this.journeys.map(function(location){return location.distance});
  // reduce the array to a total distance
  return distances.reduce((total,n)=>total + n);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
};


module.exports = Traveller;
