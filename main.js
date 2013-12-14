enchant();

window.onload = function(){
    var inputFromUser = new Object();
    var simulator = new ETPSimulator();
    simulator.getInput(inputFromUser);
    simulator.start();
};