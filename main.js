function preload(){
    clown_nose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

noseX=0;
noseY=0;

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded(){
    console.log('PoseNet Is Initialized');

}

function draw(){
    image(video , 0, 0, 350, 350);
    fill(255,0,0);
    stroke(0,255,0);
    image(clown_nose,noseX,noseY,70,30);

}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        console.log(" nose x =" + results[0].pose.nose.x);
        console.log(" nose y =" + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y + 35;
    }
}