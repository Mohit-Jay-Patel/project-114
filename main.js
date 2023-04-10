var video="";
var noseX=0;
var noseY=0;
var clown_nose="";

function preload(){
clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
var canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();
var nosePose = ml5.poseNet(video, modalLoaded);
nosePose.on("pose",got_poses);
}
function modalLoaded(){
    console.log("PoseNet is loaded");
}
function draw(){
image(video,0,0,350,350);
image(clown_nose,noseX-15,noseY+7,30,30);
}
function take_snapshot(){
    save("Photo.png");
}
function got_poses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}