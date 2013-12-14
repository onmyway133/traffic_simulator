function ETPInputManager() {
    this.square = new ETPSquare();
    this.squareScale = 4;   // square side length = 4 pixel
    
    this.lane = new ETPLane();
    
    this.bike = new ETPBike();
    this.car = new ETPCar();
    this.bus = new ETPBus();
    
    this.numerOfLane = 3;
    this.lane1Mode = ETPLane1Mode.BUS_ONLY;
    
    // Constraint
    this.constraintGoUpward_Distance = 2;
    this.constraintChangeLane_BehindDistance = 2;
    this.constraintChangeLane_FrontDistance = 2;
}

ETPInputManager.prototype.setLane1Mode = function (mode) {
    this.lane1Mode = mode;
    
    if (mode == ETPLane1Mode.BUS_ONLY) {
        this.bike.availableLaneNos = [2, 3];
        this.car.availableLaneNos = [2, 3];
    }
    else if (mode == ETPLane1Mode.BUS_BIKE) {
        this.car.availableLaneNos = [2, 3];
    }
    else if (mode == ETPLane1Mode.ALL) {
        // default
    }
};