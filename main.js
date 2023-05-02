bunnyX=0;
bunnyY=0;

function preload() {
  bunny = loadImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Forelhas-e-nariz-do-coelhinho-da-p%25C3%25A1scoa-m%25C3%25A1scara-para-o-carnaval-selfie-foto-bate-papo-cara-animal-filtro-coelho-140319608.jpg&f=1&nofb=1&ipt=78e76a6add63b05ad8be9b3ca07d42469f8164ab640fdca12d686b4204f037c8&ipo=images');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    bunnyX = results[0].pose.bunny.x-15;
    bunnyY = results[0].pose.bunny.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(bunny, bunnyX, bunnyY, 30, 30);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
