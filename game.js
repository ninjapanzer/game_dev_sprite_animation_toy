var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var currentImage = 0;

function pausecomp(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}

var img = new Image();
img.onload = function(){
  drawFireball();
}
img.src = 'fireball_sprite.png';

fireballs = fireballJSON.map(function(sprite){
  return {
    "img": img,
    "pixelsLeft": sprite.x,
    "pixelsTop": sprite.y,
    "spriteWidth": sprite.width,
    "spriteHeight": sprite.height
  }
});

var canvasPosX = 10;
var canvasPosY = 10;

function drawFireball(){
  setInterval(function(){
    var data = fireballs[currentImage];
    context.clearRect(canvasPosX,canvasPosY,data.spriteWidth,data.spriteHeight);
    context.drawImage(data.img,
      data.pixelsLeft,
      data.pixelsTop,
      data.spriteWidth,
      data.spriteHeight,
      canvasPosX,
      canvasPosY,
      data.spriteWidth,
      data.spriteHeight
    );
    if(currentImage === 5){
      currentImage = 0;
    }else{
      currentImage++;
    }
  }, 150);
}
