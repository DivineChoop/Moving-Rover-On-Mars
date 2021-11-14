var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rwidth = 100;
rheight = 90;
backgroundimg = "mars.jpg";
roverimg = "rover.png";
rover_x = 10;
rover_y = 10;

function upbackimg() {
    ctx.drawImage(bgimage, 0, 0, canvas.width, canvas.height);

}

function uprimg() {
    ctx.drawImage(rimage, rover_x, rover_y, rwidth, rheight);

}

function add() {
    bgimage = new Image();
    bgimage.onload = upbackimg;
    bgimage.src = backgroundimg;


    rimage = new Image();
    rimage.onload = rimage;
    rimage.src = roverimg;
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    if (e.keyCode == '38') {
        up();
    }
    if (e.keyCode == '39') {
        right();
    }
    if (e.keyCode == '40') {
        down();
    }
    if (e.keyCode == '37') {
        left();
    }
}

function up() {
    if (rover_y > 0) {
        rover_y = rover_y - 10;
        upbackimg();
        uprimg();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        upbackimg();
        uprimg();
    }
}

function left() {
    if (rover_x > 0) {
        rover_x = rover_x - 10;
        upbackimg();
        uprimg();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        upbackimg();
        uprimg();
    }
}
