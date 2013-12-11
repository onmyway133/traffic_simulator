function ETPSquare () {
    // unit: meter
    this.kW = 0.5;
    this.kH = 0.5;
}

function ETPLane () {
    // unit: square
    this.kW = 200;  // default 1000
    this.kH = 7;
}

// Traffic light
function ETPTrafficLight () {
    // unit: second
    this.redLightDuration = 40;
    this.greenLightDuration = 60;
}

// Lane mode
var ETPLane1Mode = {
    BUS_ONLY : 1,
    BUS_BIKE : 2,
    ALL : 3
}

function ETPAllInput() {
    this.square = new ETPSquare();
    this.squareScale = 4;   // square side length = 4 pixel
    
    this.lane = new ETPLane();
    
    this.bike = new ETPBike();
    this.car = new ETPCar();
    this.bus = new ETPBus();
    
    this.numerOfLane = 3;
    this.lane1Mode = ETPLane1Mode.BUS_ONLY;
    
    // Constraint
    this.constraintGoForward_Distance = 2;
    this.constraintChangeLane_BehindDistance = 2;
    this.constraintChangeLane_FrontDistance = 2;
}

ETPAllInput.prototype.setLane1Mode = function (mode) {
    this.lane1Mode = mode;
    
    if (mode == ETPLane1Mode.BUS_ONLY) {
        this.bike.availableLanes = [2, 3];
        this.car.availableLanes = [2, 3];
    }
    else if (mode == ETPLane1Mode.BUS_BIKE) {
        this.car.availableLanes = [2, 3];
    }
    else if (mode == ETPLane1Mode.ALL) {
        
    }
    
};