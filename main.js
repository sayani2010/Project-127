song1 = "";
song2 = "";
song1_status ="";
song2_status ="";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music1.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();
}



function play() {
    song.play();
}