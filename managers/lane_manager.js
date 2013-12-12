// Lane Manager
function LaneManager () {
    this.laneArray1 = [];
    this.laneArray2 = [];
    this.laneArray3 = [];
}

LaneManager.prototype.addToLaneArray = function (vehicle) {
    var laneArray = null;
    
    if (vehicle.laneNo == 1) {
        laneArray = this.laneArray1;
    }
    else if (vehicle.laneNo == 2) {
        laneArray = this.laneArray2;
    }
    else if (vehicle.laneNo == 3) {
        laneArray = this.laneArray3;
    }
    
    // First get previous vehicle at the beginning of the array, may be null
    var upwardVehicle = laneArray[0];
    
    // Add vehicle to the beginning of the array
    laneArray.unshift(vehicle);
    
    // Link to previous Vehicle
    vehicle.upwardVehicle = upwardVehicle;
};

LaneManager.prototype.move = function (game, allInput) {
    for (var i=0; i<this.laneArray1.length; ++i) {
        this.laneArray1[i].move();
    }
    
    for (var i=0; i<this.laneArray2.length; ++i) {
        this.laneArray2[i].move();   
    }
    
    for (var i=0; i<this.laneArray3.length; ++i) {
        this.laneArray3[i].move();   
    }
};
