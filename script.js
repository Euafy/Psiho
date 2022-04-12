var counter = 1;
var imgCount = 1;
var r = 255;
var g = 0; 
var b = 0;

function curcubeu() {

    if (r === 255 && g < 255 && b === 0) {
        g++;
        document.getElementById("vesela").style.color = "rgb(" + r + ", " + g + ", " + b +")"
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
    imgCount++
    if (imgCount == 120) imgCount = 10
    if (imgCount === 10) {
        document.getElementById("10").style.display = "flex"
        document.getElementById("110").style.display = "none"
    }
    if (imgCount === 20) {
        document.getElementById("10").style.display = "none"
        document.getElementById("20").style.display = "flex"
    }
    if (imgCount === 30) {

        document.getElementById("20").style.display = "none"
        document.getElementById("30").style.display = "flex"
    }
    if (imgCount === 40) {

        document.getElementById("30").style.display = "none"
        document.getElementById("40").style.display = "flex"
    }
    if (imgCount === 50) {

        document.getElementById("40").style.display = "none"
        document.getElementById("50").style.display = "flex"
    }
    if (imgCount === 60) {

        document.getElementById("50").style.display = "none"
        document.getElementById("60").style.display = "flex"
    }
    if (imgCount === 70) {

        document.getElementById("60").style.display = "none"
        document.getElementById("70").style.display = "flex"
    }
    if (imgCount === 80) {

        document.getElementById("70").style.display = "none"
        document.getElementById("80").style.display = "flex"
    }
    if (imgCount === 90) {

        document.getElementById("80").style.display = "none"
        document.getElementById("90").style.display = "flex"
    }
    if (imgCount === 100) {

        document.getElementById("90").style.display = "none"
        document.getElementById("100").style.display = "flex"
    }
    if (imgCount === 110) {

        document.getElementById("100").style.display = "none"
        document.getElementById("110").style.display = "flex"
    }
    var x = Math.floor(Math.random() * 35 + -35)
    var y = Math.floor(Math.random() * 30 + -10)
    while (x==y) {
        y = Math.floor(Math.random() * 30 + -10)
    }
    document.getElementById("counter").innerHTML = "Click-uri: " + counter;
    document.getElementById("vesela").style.marginLeft = x + "%";
    document.getElementById("vesela").style.marginTop = y + "%";    
}