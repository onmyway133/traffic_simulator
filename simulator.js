function ETPSimulator () {
    
}

ETPSimulator.prototype.start = function () {
    
    var vehicleManager = new ETPVehicleManager();
    var laneManager = new ETPLaneManager();
    var inputManager = this.inputManager;
    
    var game = new Core(this.inputManager.lane.width, this.inputManager.lane.height * this.inputManager.lane.numberOfLanes);

    game.fps = 15;
    this.preloadResources(game);
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

ETPSimulator.prototype.getInput = function (inputFromUser) {
    // Get configure input from user
    var inputManager = new ETPInputManager();
    
    // ...
    
    this.inputManager = inputManager;
};

ETPSimulator.prototype.preloadResources = function (game) {
    game.preload("images/chara1.png", "images/chara2.png", "images/chara3.png");
}

