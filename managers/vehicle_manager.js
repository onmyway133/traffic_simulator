// Vehicle Manager
function ETPVehicleManager() {
    
}

ETPVehicleManager.prototype.createVehicle = function (inputManager, name) {
    var vehicle = null;
    console.log(name);
    if (name == "Bike") {
        vehicle = new ETPBike(inputManager.prototypeBike.width, inputManager.prototypeBike.height);
        inputManager.prototypeBike.applyProperties(vehicle);
        vehicle.backgroundColor = "red";
    } 
    else if (name == "Car") {
        vehicle = new ETPCar(inputManager.prototypeCar.width, inputManager.prototypeCar.height);
        inputManager.prototypeCar.applyProperties(vehicle);
        vehicle.backgroundColor = "green";
    }
    else if (name == "Bus") {
        vehicle = new ETPBus(inputManager.prototypeBus.width, inputManager.prototypeBus.height);
        inputManager.prototypeBus.applyProperties(vehicle);
        vehicle.backgroundColor = "blue";
    }
    
    vehicle.x = -vehicle.width;
    vehicle.y = (vehicle.laneNo -1 ) * inputManager.lane.height + (inputManager.lane.height - vehicle.height)/2;
    
    return vehicle;
};

ETPVehicleManager.prototype.spawnVehicles = function (game, inputManager, laneManager) {
    if (game.rootScene.age % inputManager.prototypeBike.appearInterval == 0) {
        var bike = this.createVehicle(inputManager, "Bike");
        game.rootScene.addChild(bike);
        laneManager.addToLaneArray(bike);
    }
    if (game.rootScene.age % inputManager.prototypeCar.appearInterval == 0) {
        var car = this.createVehicle(inputManager, "Car");
        game.rootScene.addChild(car);
        laneManager.addToLaneArray(car);
    }
    if (game.rootScene.age % inputManager.prototypeBus.appearInterval == 0) {
        var bus = this.createVehicle(inputManager, "Bus");
        game.rootScene.addChild(bus);
        laneManager.addToLaneArray(bus);
    }
};