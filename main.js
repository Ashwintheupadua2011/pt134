noseX =0;
noseY =0;
difference =0;
leftwristX =0;
rightwristX =0;

function preload(){

}

function setup(){
  video = createCapture(VIDEO);
  video.size(550,500);
  
  canvas = createCanvas(550,500);
  canvas.position(560,80);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw(){
  background('https://cdn.pixabay.com/photo/2020/12/18/01/27/smile-5840910_1280.pnghttps://cdn.pixabay.com/photo/2020/12/18/01/27/smile-5840910_1280.png');
  fill('black');
  stroke('grey');
  ellipse(noseX,noseY, difference);
  
}

function modelLoaded(){
  console.log('PoseNet is Initialized!');
}

function gotPoses(results){
  if(results.length > 0){
     console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+noseX+"noseY = "+noseY);

    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX);

    console.log("leftwristX = "+leftwristX+"rightwristX = "+rightwristX+"difference = "+difference);
     }
}