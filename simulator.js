function ETPSimulator () {
    
}

ETPSimulator.prototype.start = function () {
    
    var inputManager = new ETPInputManager();
    var vehicleManager = new ETPVehicleManager();
    var laneManager = new ETPLaneManager();
    
    var gameWidth = inputManager.lane.kW * inputManager.squareScale;
    var gameHeight = inputManager.lane.kH * inputManager.squareScale * inputManager.numerOfLane;
 
    var game = new Core(gameWidth, gameHeight);

    game.fps = 15;
    game.preload("images/chara1.png", "images/chara2.png", "images/chara3.png");
    game.onload = function() {
        game.rootScene.addEventListener('enterframe', function() {
            // Spawn vehicle and add to lane array
            vehicleManager.spawnVehicles(game, inputManager, laneManager);
            
            // move all vehicles
            laneManager.move(game, inputManager);
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

