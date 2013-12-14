function ETPInputManager() {
    this.square = new ETPSquare();
    this.lane = new ETPLane();
    
    this.lane.width = this.lane.sW * this.square.scale;
    this.lane.height = this.lane.sH * this.square.scale;
    
    this.prototypeBike = new ETPBike(4, 2, this.square.scale); // default 2 * 1
    this.prototypeCar = new ETPCar(8, 5, this.square.scale);   // default 8 * 5
    this.prototypeBus = new ETPBus(16, 5, this.square.scale);  // default 16 * 5

    this.constraint = new ETPConstraint();
}

ETPInputManager.prototype.setLane1Mode = function (mode) {
    this.lane.lane1Mode = mode;
    
    if (mode == ETPLane1Mode.BUS_ONLY) {
        this.prototypeBike.availableLaneNos = [2, 3];
        this.prototypeCar.availableLaneNos = [2, 3];
    }
    else if (mode == ETPLane1Mode.BUS_BIKE) {
        this.prototypeCar.availableLaneNos = [2, 3];
    }
    else if (mode == ETPLane1Mode.ALL) {
        // default
    }
};