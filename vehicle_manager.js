// Vehicle Manager
function VehicleManager() {
    
}


VehicleManager.prototype.createVehicle = function (game, allInput, name) {
    var vehicle = null;
    if (name == "Bike") {
        vehicle = new ETPBike(game, allInput.bike.kW * allInput.squareScale, allInput.bike.kH * allInput.squareScale);
        vehicle.image = game.assets["chara1.png"];
    } 
    else if (name == "Car") {
        vehicle = new ETPCar(game, allInput.car.kW * allInput.squareScale, allInput.car.kH * allInput.squareScale);
        vehicle.image = game.assets["chara1.png"];
    }
    else if (name == "Bus") {
        vehicle = new ETPBus(game, allInput.bus.kW * allInput.squareScale, allInput.bus.kH * allInput.squareScale);
        vehicle.image = game.assets["chara1.png"];
        console.log(vehicle.width);
        console.log(vehicle.height);
    }
    
    game.rootScene.addChild(vehicle);
    
    // Set initial location
    vehicle.x = 0;
    vehicle.y = 0;
    
    return vehicle;
};