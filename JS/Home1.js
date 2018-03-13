function update(){
    lol();
    var inter = Math.floor((Math.random() *1000) +0);
    myVar = setTimeout(update,inter);

}
update();

function lol(){
    var random= Math.floor((Math.random() * 1)+ 8);

    spawning();
    if (random= 1){
    spawning();
    }

    if(random= 2){
        spawning();
        spawning();
    }

    if(random=4){
        spawning();
        spawning();
        spawning();
        spawning();
    }

    if(random=5){
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
    }

    if(random=6){
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
    }

    if(random=7){
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();  
    }

    if(random=8){
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
        spawning();
    }

}

function spawning(){
    var randomY = Math.floor((Math.random() * 450) + 1);
    var randomX= Math.floor((Math.random() * 800) + 1);
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(randomX,randomY,6.70,5.70,0,2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = '#003300';
    ctx.fillStyle = "white";
    ctx.fill();
    var total=0;
    total++;
    document.getElementById("demo").innerHTML = randomX;
    document.getElementById("demo1").innerHTML = randomY;
    document.getElementById("count").innerHTML= total;
}

function stop(){
    clearTimeout(myVar);

}

function clear(){
    location.reload(true);
}