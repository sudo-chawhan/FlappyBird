var cvs = document.getElementById("canvas");
var cvx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


var bgWidth = cvs.width;
var bgHeight = cvs.height;
var bx = 32;
var by = 200;
var gap = 95;
var constant = pipeNorth.height + gap;
var constant2 = cvs.height - constant;
var pipes = [];
pipes[0] = {
    px : bgWidth - 80,
    py : 0
}

var t = 0;

function moveup(){
    by -= 25;
    t = 1;
}
document.addEventListener("keyup", moveup);

function draw(){
    t++;
    cvx.drawImage(bg, 0, 0);
    cvx.drawImage(bird, bx, by);
    for(i=0; i<pipes.length; i++){
        cvx.drawImage(pipeNorth, pipes[i].px, pipes[i].py);
        cvx.drawImage(pipeSouth, pipes[i].px, pipes[i].py + constant);
        pipes[i].px--;
        if(pipes[i].px == bg.width/2 - 30){
            pipes.push({
                px : cvs.width,
                // py : -pipeNorth.height+gap
                py : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height 
            }); 
        }
    }
    cvx.drawImage(fg, 0, bgHeight - fg.height);

    by += 1*t*0.1;
    requestAnimationFrame(draw);
}

draw();