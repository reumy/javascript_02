var doc = document;
var box = doc.getElementById('box');
var up = doc.getElementById('up');
var down = doc.getElementById('down');
var left = doc.getElementById('left');
var right = doc.getElementById('right');
var stop = doc.getElementById('stop');
var back = doc.getElementById('back');

var x = 20;
var y = 225;

var up_ani, down_ani, left_ani, right_ani;

function moveUp(){

  this.disabled = true;
  down.disabled = false;
  left.disabled = false;
  right.disabled = false;

  clearInterval(down_ani);
  clearInterval(left_ani);
  clearInterval(right_ani);

  up_ani = setInterval(function(){

    if (y == 0) {
      clearInterval(up_ani);
      return;
    }

    y -= 1;
    box.style.top = y + 'px';

  },10);
};

function moveDown(){

  this.disabled = true;
  up.disabled = false;
  left.disabled = false;
  right.disabled = false;

  clearInterval(up_ani);
  clearInterval(left_ani);
  clearInterval(right_ani);

  down_ani = setInterval(function(){

    if (y == 450) {
      clearInterval(down_ani);
      return;
    }

    y += 1;
    box.style.top = y + 'px';

  },10);
};

function moveLeft(){

  this.disabled = true;
  up.disabled = false;
  down.disabled = false;
  right.disabled = false;


  clearInterval(up_ani);
  clearInterval(down_ani);
  clearInterval(right_ani);

  left_ani = setInterval(function(){

    if (x == 0) {
      clearInterval(left_ani);
      return;
    }

    x -= 1;
    box.style.left = x + 'px';

  },10);
};

function moveRight(){

  this.disabled = true;
  up.disabled = false;
  down.disabled = false;
  left.disabled = false;

  clearInterval(up_ani);
  clearInterval(down_ani);
  clearInterval(left_ani);

  right_ani = setInterval(function(){

  	if (x == 550) {
      clearInterval(right_ani);
      return;
    }

    x += 1;
    box.style.left = x + 'px';

  },10);
};

function moveStop(){

  up.disabled = false;
  down.disabled = false;
  left.disabled = false;
  right.disabled = false;

  clearInterval(up_ani);
  clearInterval(down_ani);
  clearInterval(left_ani);
  clearInterval(right_ani);
};

function moveBack(){

  up.disabled = false;
  down.disabled = false;
  left.disabled = false;
  right.disabled = false;

  clearInterval(up_ani);
  clearInterval(down_ani);
  clearInterval(left_ani);
  clearInterval(right_ani);
  
  x = 20;
  y = 225;

  box.style.left = x + 'px';
  box.style.top = y + 'px';
};

up.addEventListener('click', moveUp);
left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
down.addEventListener('click', moveDown);
stop.addEventListener('click', moveStop);
back.addEventListener('click', moveBack);

