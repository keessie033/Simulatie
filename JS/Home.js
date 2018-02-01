function spawning(){
var count=0;

count=count+1;
var randomY = Math.floor((Math.random() * 500) + 1);
var randomX= Math.floor((Math.random() * 750) + 1);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(randomY,randomX,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();

var random= Math.floor((Math.random() * 1)+ 8);

if(random= 2){
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
//count=count+1;
}

if(random=5){
var pos2Y = Math.floor((Math.random() * randomY) + randomY+6);
var pos2X = Math.floor((Math.random() * randomX) + randomX+6);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
var pos2Y = Math.floor((Math.random() * randomY) + randomY+6);
var pos2X = Math.floor((Math.random() * randomX) + randomX+6);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
//count=count+2;
}

if(random=3){
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
//count=cout+3;
}

if(random=4){
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
var pos2Y = Math.floor((Math.random() * randomY) + randomY+10);
var pos2X = Math.floor((Math.random() * randomX) + randomX+10);
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(pos2Y,pos2X,6.70,5.70,0,2*Math.PI);
ctx.stroke();
ctx.strokeStyle = '#003300';
ctx.fillStyle = "white";
ctx.fill();
count=count+4;
}

document.getElementById("demo").innerHTML = randomX;
document.getElementById("demo1").innerHTML = randomY;
document.getElementById("count").innerHTML= count;
var inter = Math.floor((Math.random() * 2000) +0);
setTimeout(spawning, inter);
}
spawning();
