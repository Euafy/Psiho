var counter = 1;

var r = 255;
var g = 0; 
var b = 0;

function curcubeu() {

    if (r === 255 && g < 255 && b === 0) {
        g++;
        document.getElementById("vesela").style.color = "rgb(" + r + ", " + g + ", " + b +")"
        console.log(g)
    }

    if (r > 0 && g === 255 && b === 0) {
        r--
        document.getElementById("vesela").style.color = "rgb(" + r + ", " + g + ", " + b +")"
    }
    if (r === 0 && g === 255 && b < 255) {
        b++
        document.getElementById("vesela").style.color = "rgb(" + r + ", " + g + ", " + b +")"
    }
    if (r === 0 && g > 0 && b === 255) {
        g--
        document.getElementById("vesela").style.color = "rgb(" + r + ", " + g + ", " + b +")"
    }
    if (r < 255 && g === 0 && b === 255) {
        r++
        document.getElementById("vesela").style.color = "rgb(" + r + ", " + g + ", " + b +")"
    }
    if (r === 255 && g === 0 && b > 0) {
        b--
        document.getElementById("vesela").style.color = "rgb(" + r + ", " + g + ", " + b +")"

    }
}

function hocusPocus() {
    var x = Math.floor(Math.random() * 35 + -35)
    var y = Math.floor(Math.random() * 30 + -10)
    while (x==y) {
        y = Math.floor(Math.random() * 30 + -10)
    }
    console.log(x);
    console.log(y);
    document.getElementById("titlu").innerHTML = "Da click pe curcubeu!";
    document.getElementById("counter").innerHTML = "Click-uri: " + counter;
    document.getElementById("vesela").innerHTML = "Bunaaa :)"
    document.getElementById("vrajeala").style.display = "none";
    document.getElementById("clicc").style.display = "none";
    document.getElementById("vesela").style.position = "absolute";
    document.getElementById("vesela").style.marginLeft = x + "%";
    document.getElementById("vesela").style.marginTop = y + "%";
    var intervalTimer = setInterval(function(){curcubeu()}, 0)
}



function party() {
    counter++
    var x = Math.floor(Math.random() * 35 + -35)
    var y = Math.floor(Math.random() * 30 + -10)
    while (x==y) {
        y = Math.floor(Math.random() * 30 + -10)
    }
    document.getElementById("counter").innerHTML = "Click-uri: " + counter;
    document.getElementById("vesela").style.marginLeft = x + "%";
    document.getElementById("vesela").style.marginTop = y + "%";    
}