function ETPSimulator () {
    
}

ETPSimulator.prototype.start = function () {
    
    var allInput = new ETPAllInput();
    var vehicleManager = new VehicleManager();
    
    var gameWidth = allInput.lane.kW * allInput.squareScale;
    var gameHeight = allInput.lane.kH * allInput.squareScale * allInput.numerOfLane;
 
    var game = new Core(gameWidth, gameHeight);

    game.fps = 15;
    game.preload("images/chara1.png", "images/chara2.png", "images/chara3.png");
    game.onload = function() {
        game.rootScene.addEventListener('enterframe', function() { 
            console.log(this.age);
            if(this.age % 20 == 0){
                var vehicleNames = ["Bike", "Car", "Bus"];
                var randIndex = rand(3);
                vehicleManager.createVehicle(game, allInput, vehicleNames[randIndex]);
            }
        });
    };
    
    
    
    game.start();
};

ETPSimulator.prototype.pause = function () {
    
};

ETPSimulator.prototype.resume = function () {
    
};

ETPSimulator.prototype.stop = function () {
    
};

ETPSimulator.prototype.applyInput = function () {
    
};

