// Vehicle
var ETPVehicle = enchant.Class.create(enchant.Sprite, {
    initialize : function (w, h) {
        // NOTE: parameters must match
        enchant.Sprite.call(this, w, h);
        this.name = "Vehicle";
        this.maxVelocity = 0;
        this.appearInterval = 0;
        this.defaultLane = 0;
        this.priority = 0;  // car in front of higher priority car must change lane
        this.availableLaneNos = null;
        this.laneNo = 0;
        this.upwardVehicle = null;
    },
    applyProperties : function (cloneVehicle) {
        cloneVehicle.name = this.name;
        cloneVehicle.maxVelocity = this.maxVelocity;
        cloneVehicle.appearInterval = this.appearInterval;
        cloneVehicle.defaultLane = this.defaultLane;
        cloneVehicle.priority = this.priority;
        cloneVehicle.availableLaneNos = this.availableLaneNos;
        
        // set laneNo
        var availableLanesCount = this.availableLaneNos.length;
        cloneVehicle.laneNo =  this.availableLaneNos[rand(availableLanesCount)];
    },
    move : function () {
        if (this.canMoveUpward()) {
            this.x += this.velocity; 
        }
        else {
            
        }
    },
    canMoveUpward : function () {
        // TODO: should consider vehicle width and velocity
        if (this.upwardVehicle) {
            return ((this.upwardVehicle.x - this.x) / 4 > 10 );
        }

        return true;
    }
});


// Bike
var ETPBike = enchant.Class.create(ETPVehicle, {
   initialize : function (w, h) {
       ETPVehicle.call(this, w, h);
       this.name = "Bike";
       this.maxVelocity = 8;
       this.velocity = rand(this.maxVelocity) + 1;
       this.appearInterval = 5; // default 2
       this.defaultLane = 3;
       this.priority = 0;
       this.availableLaneNos = [1, 2, 3];
   },   
});

// Car
var ETPCar = enchant.Class.create(ETPVehicle, {
   initialize : function (w, h) {
       ETPVehicle.call(this, w, h);
       this.name = "Car";
       this.maxVelocity = 12;
       this.velocity = rand(this.maxVelocity) + 1;
       this.appearInterval = 10; // default 4
       this.defaultLane = 2;
       this.priority = 0;
       this.availableLaneNos = [1, 2, 3];
   },
});

// Bus
var ETPBus = enchant.Class.create(ETPVehicle, {
   initialize : function (w, h) {
       ETPVehicle.call(this, w, h);
       this.name = "Bus";
       this.maxVelocity = 10;
       this.velocity = rand(this.maxVelocity) + 1;
       this.appearInterval = 20;   // default 300
       this.defaultLane = 1;
       this.priority = 1;
       this.availableLaneNos = [1];
   },
});

