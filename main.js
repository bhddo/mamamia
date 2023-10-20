
function draw()
{
    Image(VIDEO, 0, 0, 600, 500);
}

function play() 
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCAPTURE(VIDEO);
    video.hide();

    ploseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNEt esta inicializado')
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY,20);
    InNuuberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNuuberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "volume = " + volume;
    song.setVolume(volume);
    }
}

function gotPoses(results)
{
   
   if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristXwristX +"leftWristY =" + leftWyistY)

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristXwristX +"rightWristY =" + rightWyistY)
}
}
