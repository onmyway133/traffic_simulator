function ETPSimulator () {
    
}

ETPSimulator.prototype.start = function () {
    
    var allInput = new ETPAllInput();
    var vehicleManager = new VehicleManager();
    
    var gameWidth = allInput.lane.kW * allInput.squareScale;
    var gameHeight = allInput.lane.kH * allInput.squareScale * allInput.numerOfLane;
 
    var game = new Core(gameWidth, gameHeight);

    game.fps = 15;
    game.preload("chara1.png");
    game.onload = function() {
        /*
        game.rootScene.addEventListener('enterframe', function() { 
            if(this.age % 20 == 0){
                vehicleManager.createVehicle(game, allInput, "bike");
            }
        });
        */
        
        var bear = new ETPBus(game, 32, 32);
        bear.image = game.assets["chara1.png"];
        bear.x = 0;
        bear.y = 0;
        bear.frame = 5;
        game.rootScene.addChild(bear);

        bear.addEventListener("enterframe", function() {
            this.x += 1;
            this.frame = this.age % 2 + 6;
        });
        
        //vehicleManager.createVehicle(game, allInput, "Bus");
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

