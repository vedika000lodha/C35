var canvas;
var database;
var gameState = 0
var playerCount;
var form, game, player;

function setup(){
    database = firebase.database();
    canvas = createCanvas(500,500);
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background("white");
    
}


