var video="";
function preload(){

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
}
function take_snapshot(){
    save("Photo.png");
}
function got_poses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}