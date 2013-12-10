// Vehicle
var ETPVehicle = enchant.Class.create(enchant.Sprite, {
    initialize : function (game, x, y) {
        enchant.Sprite.call(this, game, x, y);
        this.name = "Vehicle";
        this.kW = 0;
        this.kH = 0;
        this.maxVelocity = 0;
        this.appearInterval = 0;
        this.defaultLane = 0;
        this.priority = 0;  // car in front of higher priority car must change lane
    }
});


// Bike
var ETPBike = enchant.Class.create(ETPVehicle, {
   initialize : function (game, x, y) {
       ETPVehicle.call(this, game, x, y);
       this.name = "Bike";
       this.kW = 2;
       this.kH = 1;
       this.maxVelocity = 8;
       this.appearInterval = 2;
       this.defaultLane = 3;
       this.priority = 0;
   }
});

// Car
var ETPCar = enchant.Class.create(ETPVehicle, {
   initialize : function (game, x, y) {
       ETPVehicle.call(this, game, x, y);
       this.name = "Car";
       this.kW = 8;
       this.kH = 5;
       this.maxVelocity = 12;
       this.appearInterval = 4;
       this.defaultLane = 2;
       this.priority = 0;
   }
});

// Bus
var ETPBus = enchant.Class.create(ETPVehicle, {
   initialize : function (game, x, y) {
       ETPVehicle.call(this, game, x, y);
       this.name = "Bus";
       this.kW = 16;
       this.KH = 5;
       this.maxVelocity = 10;
       this.appearInterval = 300;
       this.defaultLane = 1;
       this.priority = 1;
   }
});

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
    }
    
    game.rootScene.addChild(vehicle);
    
    // Set initial location
    vehicle.x = 0;
    vehicle.y = 0;
    
    return vehicle;
};