// Vehicle
var ETPVehicle = enchant.Class.create(enchant.Sprite, {
    initialize : function (sW, sH, scale) {
        // NOTE: parameters must match
        enchant.Sprite.call(this, sW * scale, sH * scale);
        
        this.sW = sW;
        this.sH = sH;
        this.scale = scale;
        
        this.name = "Vehicle";
        this.sMaxVelocity = 0;
        this.appearInterval = 0;
        this.defaultLane = 0;
        this.priority = 0;  // car in front of higher priority car must change lane
        this.availableLaneNos = null;
        this.laneNo = 0;
        this.upwardVehicle = null;
    },
    applyProperties : function (cloneVehicle) {
        cloneVehicle.name = this.name;
        cloneVehicle.sMaxVelocity = this.sMaxVelocity;
        cloneVehicle.appearInterval = this.appearInterval;
        cloneVehicle.defaultLane = this.defaultLane;
        cloneVehicle.priority = this.priority;
        cloneVehicle.availableLaneNos = this.availableLaneNos;
        
        // set laneNo
        var availableLanesCount = this.availableLaneNos.length;
        cloneVehicle.laneNo =  this.availableLaneNos[rand(availableLanesCount)];
        
        // set velocity
        var sVelocity = rand(this.sMaxVelocity) + 1;
        cloneVehicle.velocity = sVelocity * (this.scale - 2);   // default * this.scale
    },
    goUpward : function (distanceToGo) {
        // Vehicle can't move longer than velocity
        if (distanceToGo < this.velocity) {
            this.x += distanceToGo;
        }
        else {
            this.x += this.velocity;
        }
    }
});


// Bike
var ETPBike = enchant.Class.create(ETPVehicle, {
   initialize : function (sW, sH, scale) {
       ETPVehicle.call(this, sW, sH, scale);
       this.name = "Bike";
       this.sMaxVelocity = 8;
       this.appearInterval = 5; // default 2
       this.defaultLane = 3;
       this.priority = 0;
       this.availableLaneNos = [1, 2, 3];
   },   
});

// Car
var ETPCar = enchant.Class.create(ETPVehicle, {
   initialize : function (sW, sH, scale) {
       ETPVehicle.call(this, sW, sH, scale);
       this.name = "Car";
       this.sMaxVelocity = 12;
       this.appearInterval = 10; // default 4
       this.defaultLane = 2;
       this.priority = 0;
       this.availableLaneNos = [1, 2, 3];
   },
});

// Bus
var ETPBus = enchant.Class.create(ETPVehicle, {
   initialize : function (sW, sH, scale) {
       ETPVehicle.call(this, sW, sH, scale);
       this.name = "Bus";
       this.sMaxVelocity = 10;
       this.appearInterval = 20;   // default 300
       this.defaultLane = 1;
       this.priority = 1;
       this.availableLaneNos = [1];
   },
});

