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
            vehicleManager.spawnVehicles(game, allInput);
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

