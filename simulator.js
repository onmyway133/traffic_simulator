function ETPSimulator () {
    
}

ETPSimulator.prototype.start = function () {
    var inputManager = this.inputManager;
    var vehicleManager = new ETPVehicleManager();
    var laneManager = new ETPLaneManager(inputManager);
    
    var game = new Core(this.inputManager.lane.width, this.inputManager.lane.height * this.inputManager.lane.numberOfLanes);

    game.fps = 15;
    this.preloadResources(game);
    game.onload = function() {
        // TODO: consider each "enterframe" is 1 second
        game.rootScene.addEventListener('enterframe', function() {
            // Spawn vehicle and add to lane array
            vehicleManager.spawnVehicles(game.rootScene, inputManager, laneManager);
            
            // move all vehicles
            laneManager.moveAllVehicles(game.rootScene, inputManager);
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

