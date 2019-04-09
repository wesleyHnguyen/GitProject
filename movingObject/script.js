/**
 * Created by nhatnk on 4/26/17.
 * improved by thanhnh on 9/4/19.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  };

  this.moveRight = function(){
    this.left += this.speed;
    //console.log('ok: ' + this.left);
  };

  this.changeSpeed = function (speed) {
      this.speed = speed;
  };

  this.moveDown = function () {

    this.top += this.speed;
  };

  this.moveUp = function () {

    this.top -= this.speed;
  };

  this.moveLeft = function () {
    this.left -= this.speed;
  };

}

var hero = new Hero('pikachu.png', 300, 300, 200);
hero.speed = 20;


let direction;
function  getId(e) {
  direction = e;
  alert(direction);
}

function start(){
  if(direction === "right" && hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  if(direction === "down" && hero.top < window.innerHeight - hero.size)
    hero.moveDown();

  if(direction === "up" && hero.top > 0)
    hero.moveUp();

  if(direction === "left" && hero.left > 0)
    hero.moveLeft();


  document.getElementById('game').innerHTML = hero.getHeroElement();

  setTimeout(start, 100);
}




