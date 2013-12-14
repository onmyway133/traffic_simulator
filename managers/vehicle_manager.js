// Vehicle Manager
function ETPVehicleManager() {
    
}

// TODO: consider allInput
// Create one from allInput prototype pattern
// Vehicle clone()
ETPVehicleManager.prototype.createVehicle = function (game, inputManager, name) {
    var vehicle = null;
    if (name == "Bike") {
        vehicle = new ETPBike(game, inputManager.bike.kW * inputManager.squareScale, inputManager.bike.kH * inputManager.squareScale);
        vehicle.backgroundColor = "red";
    } 
    else if (name == "Car") {
        vehicle = new ETPCar(game, inputManager.car.kW * inputManager.squareScale, inputManager.car.kH * inputManager.squareScale);
        vehicle.backgroundColor = "green";
    }
    else if (name == "Bus") {
        vehicle = new ETPBus(game, inputManager.bus.kW * inputManager.squareScale, inputManager.bus.kH * inputManager.squareScale);
        vehicle.backgroundColor = "blue";
    }

    // Set initial location
    // TODO: should use inputManager
    var availableLanesCount = vehicle.availableLaneNos.length;
    vehicle.laneNo =  vehicle.availableLaneNos[rand(availableLanesCount)];
    
    vehicle.x = - (vehicle.kW * inputManager.squareScale);
    vehicle.y = (((vehicle.laneNo - 1) * inputManager.lane.kH) + ((inputManager.lane.kH - vehicle.kH)/2)) * inputManager.squareScale;
    
    return vehicle;
};

ETPVehicleManager.prototype.spawnVehicles = function (game, inputManager, laneManager) {
    if (game.rootScene.age % inputManager.bike.appearInterval == 0) {
        var bike = this.createVehicle(game, inputManager, "Bike");
        game.rootScene.addChild(bike);
        laneManager.addToLaneArray(bike);
    }
    if (game.rootScene.age % inputManager.car.appearInterval == 0) {
        var car = this.createVehicle(game, inputManager, "Car");
        game.rootScene.addChild(car);
        laneManager.addToLaneArray(car);
    }
    if (game.rootScene.age % inputManager.bus.appearInterval == 0) {
        var bus = this.createVehicle(game, inputManager, "Bus");
        game.rootScene.addChild(bus);
        laneManager.addToLaneArray(bus);
    }
};