let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  agua: "https://i.pinimg.com/originals/89/6e/b6/896eb63c1827bbf6419fa31ef27e2462.png",
  fuego:
    "https://images.vexels.com/media/users/3/146888/isolated/lists/1e91f6545e3496c986ba7064379d2ad9-ilustracion-de-fuego-ardiente.png",
};
let x = 50;
let y = 60;
let vX = 50;
let vY = 75;
let dT = 0.03;
let x2 = 200;
let y2 = 200;
let x1 = 50;
let y1 = 60;
let vX1 = 50;
let vY1 = 75;
function draw(images) {
  x = x + vX * dT;
  y = y + vY * dT; 
  x1 = x1 + vX1 * dT;
  y1 = y1 + vY1 * dT; 
    if(500 - y < 30){
        vY = -vY}
    if(1250 - x < 30){
        vX = -vX}
    if(y - 0 < 30){
        vY = -vY}
    if(x - 0 < 30){
        vX = -vX}
  ctx.clearRect(0, 0, 1250, 500);
  ctx.drawImage(images.agua, x2-30, y2-30, 60, 60);
  ctx.drawImage(images.fuego, x - 30, y - 30, 60, 60);
  ctx.drawImage(images.fuego, x - 30, y - 30, 60, 60);
}

let idDibujar;
let corriendo = false;
function run(images){
  corriendo = true;
  idDibujar = window.setInterval(function(){
    draw(images);
  },30);  
}

function stop(){
    window.clearInterval(idDibujar);
    corriendo = false;
}
window.onkeydown = function (evento){
    if(evento.key == "w"){
        y2 = y2 - 10;
        if(y2 - 0 < 30){
          y2 = 30
        }
    }
    if(evento.key == "s"){
        y2 = y2 + 10;
        if(500 - y2 < 30){
          y2 = 470
        }
    }
    if(evento.key == "a"){
        x2 = x2 - 10;
        if(x2 - 0 < 30){
          x2 = 30
        }
      
    }
    if(evento.key == "d"){
        x2 = x2 + 10;
        if(1250 - x2 < 30){
          x2 = 1220
        }
    }
  } 
  loadImages(sources, run);