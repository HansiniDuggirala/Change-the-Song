song= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song=loadSound("s1.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();  
    poseNet=ml5.poseNet(video, modelLoaded);
}

function draw()
{
image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded ()
    {
        console.log('Model Is Intitialized');
        poseNet.on('pose', gotPoses);
    }

    function gotPoses(results)
    {
        if (results.length > 0 );
        {
        cons3ole.log (results);
        leftWrist = results[0].pose.leftWrist;
        song.play(sb2.mp3);

        }

    if (results.length > 0 );
    {
    cons3ole.log (results);
    RightWrist = results[0].pose.RightWrist;
    song.play(s1.mp3);
    }

    }
