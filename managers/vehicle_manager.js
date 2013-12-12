// Vehicle Manager
function VehicleManager() {
    
}


VehicleManager.prototype.createVehicle = function (game, allInput, name) {
    var vehicle = null;
    if (name == "Bike") {
        vehicle = new ETPBike(game, allInput.bike.kW * allInput.squareScale, allInput.bike.kH * allInput.squareScale);
        vehicle.backgroundColor = "red";
    } 
    else if (name == "Car") {
        vehicle = new ETPCar(game, allInput.car.kW * allInput.squareScale, allInput.car.kH * allInput.squareScale);
        vehicle.backgroundColor = "green";
    }
    else if (name == "Bus") {
        vehicle = new ETPBus(game, allInput.bus.kW * allInput.squareScale, allInput.bus.kH * allInput.squareScale);
        vehicle.backgroundColor = "blue";
    }

    // Set initial location
    var availableLanesCount = vehicle.availableLaneNos.length;
    vehicle.laneNo =  vehicle.availableLaneNos[rand(availableLanesCount)];
    
    vehicle.x = - (vehicle.kW * allInput.squareScale);
    vehicle.y = (((vehicle.laneNo - 1) * allInput.lane.kH) + ((allInput.lane.kH - vehicle.kH)/2)) * allInput.squareScale;
    
    return vehicle;
};

VehicleManager.prototype.spawnVehicles = function (game, allInput, laneManager) {
    if (game.rootScene.age % allInput.bike.appearInterval == 0) {
        var bike = this.createVehicle(game, allInput, "Bike");
        game.rootScene.addChild(bike);
        laneManager.addToLaneArray(bike);
    }
    if (game.rootScene.age % allInput.car.appearInterval == 0) {
        var car = this.createVehicle(game, allInput, "Car");
        game.rootScene.addChild(car);
        laneManager.addToLaneArray(car);
    }
    if (game.rootScene.age % allInput.bus.appearInterval == 0) {
        var bus = this.createVehicle(game, allInput, "Bus");
        game.rootScene.addChild(bus);
        laneManager.addToLaneArray(bus);
    }
};