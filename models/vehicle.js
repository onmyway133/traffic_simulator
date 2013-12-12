// Vehicle
var ETPVehicle = enchant.Class.create(enchant.Sprite, {
    initialize : function (game, x, y) {
        // Do not use Sprite.call(this, game, x, y)
        enchant.Sprite.call(this, x, y);
        this.name = "Vehicle";
        this.kW = 0;
        this.kH = 0;
        this.maxVelocity = 0;
        this.appearInterval = 0;
        this.defaultLane = 0;
        this.priority = 0;  // car in front of higher priority car must change lane
        this.game = game;
        this.availableLaneNos = null;
        this.laneNo = 0;
        this.upwardVehicle = null;
    },
    move : function () {
        this.x += this.velocity; 
    }
});


// Bike
var ETPBike = enchant.Class.create(ETPVehicle, {
   initialize : function (game, x, y) {
       ETPVehicle.call(this, game, x, y);
       this.name = "Bike";
       this.kW = 4; // default 2
       this.kH = 2; // defaul 1
       this.maxVelocity = 8;
       this.velocity = rand(this.maxVelocity) + 1;
       this.appearInterval = 5; // default 2
       this.defaultLane = 3;
       this.priority = 0;
       this.availableLaneNos = [1, 2, 3];
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
       this.velocity = rand(this.maxVelocity) + 1;
       this.appearInterval = 10; // default 4
       this.defaultLane = 2;
       this.priority = 0;
       this.availableLaneNos = [1, 2, 3];
   }
});

// Bus
var ETPBus = enchant.Class.create(ETPVehicle, {
   initialize : function (game, x, y) {
       ETPVehicle.call(this, game, x, y);
       this.name = "Bus";
       this.kW = 16;
       this.kH = 5;
       this.maxVelocity = 10;
       this.velocity = rand(this.maxVelocity) + 1;
       this.appearInterval = 20;   // default 300
       this.defaultLane = 1;
       this.priority = 1;
       this.availableLaneNos = [1];
   }
});

