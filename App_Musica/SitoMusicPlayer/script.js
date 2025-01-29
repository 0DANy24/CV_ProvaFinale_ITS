var onOff = 0;
let music = new Audio('musica/snowfall.mp3');

function playStopMusic(){
    onOff = 1 - onOff;
    console.log(onOff);
    onOff? music.play(): music.pause();
}