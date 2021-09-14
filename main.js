rightwristx=""

rightwristy=""

leftwristx=""

leftwristy=""

leftwristscore=0;

rightwristscore=0;

song=""

function draw()
{
    image(video, 0, 0, 500, 500);
    fill("red");
    stroke("red");
    if (leftwristscore > 0.2) {
    circle(leftwristx, leftwristy, 20);
    numleftwristy=Number(leftwristy);
    removedec=floor(numleftwristy);
    volume=removedec/500;
    document.getElementById("div-volume").innnerHTML=volume;
    song.setVolume(volume);
    }
}

function preload()
{
    song=loadSound("music.mp3")
}

function setup()
{
    canvas=createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    pose=ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotResults);
}

function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function modelLoaded()
{
    console.log("Model has been initialized");
}

function gotResults(pose)
{
    console.log(pose);
    rightwristx=pose[0].pose.rightWrist.x;
    rightwristy=pose[0].pose.rightWrist.y;
    leftwristx=pose[0].pose.leftWrist.x;
    leftwristy=pose[0].pose.leftWrist.y;
    leftwristscore=pose[0].pose.keypoints[9].score;
    rightwristscore=pose[0].pose.keypoints[10].score;
    console.log(rightwristscore);
    console.log(leftwristscore);
    console.log(rightwristx);
    console.log(rightwristy);
    console.log(leftwristx);
    console.log(leftwristy);
}
