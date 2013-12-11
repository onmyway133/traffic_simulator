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
    
    game.rootScene.addChild(vehicle);
    
    
    vehicle.addEventListener("enterframe", function(){
            this.x += 1 * vehicle.velocity;
    });
    
    // Set initial location
    vehicle.x = - (vehicle.kW * allInput.squareScale);
    vehicle.y = (((vehicle.defaultLane - 1) * allInput.lane.kH) + ((allInput.lane.kH - vehicle.kH)/2)) * allInput.squareScale;
    
    return vehicle;
};

VehicleManager.prototype.spawnVehicles = function (game, allInput) {
    if(game.rootScene.age % allInput.bike.appearInterval == 0){
        this.createVehicle(game, allInput, "Bike");
    }
    if(game.rootScene.age % allInput.car.appearInterval == 0){
        this.createVehicle(game, allInput, "Car");
    }
    if(game.rootScene.age % allInput.bus.appearInterval == 0){
        this.createVehicle(game, allInput, "Bus");
    }
};