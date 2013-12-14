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
    
    if (upwardVehicle) {
        // Link to upward Vehicle
        vehicle.upwardVehicle = upwardVehicle;
        upwardVehicle.behindVehicle = vehicle;
    }
    
    
    // Add vehicle to the beginning of the array
    laneArray.unshift(vehicle);
    
    // We don't care the position in this array
    this.laneArrayAll.push(vehicle);
};

ETPLaneManager.prototype.moveAllVehicles = function (scene, inputManager) {
    // Vehicles in the far right moves first
    for (var i=this.laneArray1.length - 1; i>=0; --i) {
        this.moveVehicle(this.laneArray1[i]);
    }
    
    for (var i=this.laneArray2.length - 1; i>=0; --i) {
        this.moveVehicle(this.laneArray2[i]);
    }
    
    for (var i=this.laneArray3.length - 1; i>=0; --i) {
        this.moveVehicle(this.laneArray3[i]);
    }
};

ETPLaneManager.prototype.moveVehicle = function (vehicle) {
    // Move upward
    // Check if there is vehicle upward
    // TODO: consider the velocity as well, if there is car upward, should go slowly than velocity
    if (vehicle.upwardVehicle) {
        var distanceFromUpwardVehicle = vehicle.upwardVehicle.x - (vehicle.x + vehicle.width);
        if (distanceFromUpwardVehicle > this.inputManager.constraint.goUpwardDistance) {
            // This vehicle velocity may be greater than distanceToGo, so must check
            var distanceToGo = distanceFromUpwardVehicle - this.inputManager.constraint.goUpwardDistance;
            vehicle.goUpward(distanceToGo);   
        }   
    } else {
        vehicle.goUpward(vehicle.velocity); 
    }
    
    // Check if vehicle behind has greater priority, then must change lane
    if (vehicle.behindVehicle) {  
        if (vehicle.priority < vehicle.behindVehicle.priority) {
            console.log("Notice: behind vehicle has greater priority, we must change lane as soon as possible");   
        }
    }
    
    // Change lane
    
};
