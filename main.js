function preload()
{

}

function setup()
{
    canvas = createCanvas(600 , 450);
    canvas.position(120 , 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw()
{
  image(video , 0 , 0 , 600 , 450);
  tint(tint_color);
}

function take_snapshot()
{
    save('varun.png');
}

function apply_filter()
{
  tint_color = document.getElementById("color_name").value;
  
}