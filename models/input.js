function ETPSquare () {
    // unit: meter
    this.sW = 0.5;
    this.sH = 0.5;
    this.scale = 4;
}

// Lane mode
var ETPLane1Mode = {
    BUS_ONLY : 1,
    BUS_BIKE : 2,
    ALL : 3
}

function ETPLane () {
    // unit: square
    this.sW = 200;  // default 1000
    this.sH = 7;
    this.numberOfLanes = 3;
    this.lane1Mode = ETPLane1Mode.BUS_ONLY;
}

// Traffic light
function ETPTrafficLight () {
    // unit: second
    this.redLightDuration = 40;
    this.greenLightDuration = 60;
}

// Constraint
function ETPConstraint (scale) {
    this.sGoUpwardDistance = 2;
    this.sChangeLaneBehindDistance = 2;
    this.sChangeLaneUpwardDistance = 2;   
    
    this.goUpwardDistance = this.sGoUpwardDistance * scale;
    this.changeLaneBehindDistance = this.sChangeLaneBehindDistance * scale;
    this.changeLaneUpwardDistance = this.sChangeLaneUpwardDistance * scale;
}