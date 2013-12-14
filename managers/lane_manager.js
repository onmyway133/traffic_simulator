// Lane Manager
function ETPLaneManager (inputManager) {
    this.laneArray1 = [];
    this.laneArray2 = [];
    this.laneArray3 = [];
    
    // Contains all vehicles
    this.laneArrayAll = [];
    
    this.inputManager = inputManager;
}

ETPLaneManager.prototype.addToLaneArray = function (vehicle) {
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
    
    // Link to previous Vehicle
    vehicle.upwardVehicle = upwardVehicle;
    
    // Add vehicle to the beginning of the array
    laneArray.unshift(vehicle);
    
    // We don't care the position in this array
    this.laneArrayAll.push(vehicle);
};

ETPLaneManager.prototype.moveAllVehicles = function (scene, inputManager) {
    // TODO: the order of moving vehicle (call moveVehicle) may be important
    for (var i=0; i<this.laneArrayAll.length; ++i) {
        this.moveVehicle(this.laneArrayAll[i]);
    }
};

ETPLaneManager.prototype.moveVehicle = function (vehicle) {
    // Move upward
    // Check if there is vehicle upward
    // TODO: consider the velocity as well, if there is car upward, should go slowly than velocity
    if (vehicle.upwardVehicle) {
        if ((vehicle.upwardVehicle.x - (vehicle.x + vehicle.width)) > this.inputManager.constraint.goUpwardDistance) {
            vehicle.goUpward();   
        }   
    } else {
        vehicle.goUpward(); 
    }
    
    // Check if vehicle behind has greater priority, then must change lane
    
    // Change lane
    
};
