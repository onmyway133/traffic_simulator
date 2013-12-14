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