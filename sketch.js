var trex, trexCorrendo, solo, soloImg, soloInvisivel, nuvemImg;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6

function preload(){

  trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImg = loadImage("ground2.png");
  nuvemImg = loadImage("cloud.png");
  obstaculo1 = loadImage("obstacle1.png");
  obstaculo2 = loadImage("obstacle2.png");
  obstaculo3 = loadImage("obstacle3.png");
  obstaculo4 = loadImage("obstacle4.png");
  obstaculo5 = loadImage("obstacle5.png");
  obstaculo6 = loadImage("obstacle6.png");

}

function setup(){

  createCanvas(600,200);
  
  trex = createSprite(50,160, 20,50);
  trex.addAnimation("correndo", trexCorrendo);
  trex.scale = 0.5;

  solo = createSprite(300,180,600,20);
  solo.addImage(soloImg);
  solo.velocityX = -2;

  soloInvisivel = createSprite(200,190,400,10);
  soloInvisivel.visible = false;

}

function draw(){
  background("white");

  console.log(random(1, 100));

  if(keyDown("space") && trex.y >= 150){
    trex.velocityY = -10;
  }
  trex.velocityY += 0.5;

  trex.collide(soloInvisivel);

  if(solo.x <0){
    solo.x = width/2;
  }
  gerarNuvens();
  gerarObstaculos();
  drawSprites();
}

function gerarNuvens(){
  if(frameCount % 60 == 0){ 
    var nuvem = createSprite(600, 100, 40, 10);
    nuvem.velocityX = -3;
    nuvem.y = Math.round(random(10,100));
    nuvem.addImage(nuvemImg);
    //nuvem.scale = 0.5;
    nuvem.lifetime = 250;
    trex.depth = nuvem.depth;
    trex.depth++;
}
}

function gerarObstaculos(){
  if(frameCount % 60 == 0){
    var obstaculo = createSprite(600, 165, 10, 40);
    obstaculo.velocityX = -3;

    var aleatoria = Math.round(random(1,6));
    switch (aleatoria) {
      case 1: obstaculo.addImage(obstaculo1);
        break;

      case 2: obstaculo.addImage(obstaculo2);
      break;

      case 3: obstaculo.addImage(obstaculo3);
      break;
    
      case 4: obstaculo.addImage(obstaculo4);
      break;

      case 5: obstaculo.addImage(obstaculo5);
      break;

      case 6: obstaculo.addImage(obstaculo6);
      break;

      default:
        break;
    }
    obstaculo.scale = 0.5;
    obstaculo.lifetime = 250;
  }
}