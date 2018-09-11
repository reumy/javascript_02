var doc = document;

var img = doc.getElementById('img');
var imgli = img.getElementsByTagName('li');
var circle = doc.getElementById('circle').getElementsByTagName('div');

var prev = doc.getElementById('prev');
var next = doc.getElementById('next');
var play = doc.getElementById('play');
var stop = doc.getElementById('stop');

var move, auto;
var now = 0;
var left = 0;
var imgleng = imgli.length;
var max = (imgleng - 1) * -700;
var index = 0;

prev.addEventListener('click', prevFunc);
next.addEventListener('click', nextFunc);
play.addEventListener('click', playFunc);
stop.addEventListener('click', stopFunc);

function prevFunc(){

  if (left >= 0) {

    clearInterval(move);
  
  } else {
    
    now = now + 700;
    index = index - 1;
    
    move = setInterval(function(){
      
      left = left + 10;
      
      if (left >= now) {
        clearInterval(move);
      }
      
      img.style.left = left + 'px';

      circle[index].classList.add('active');
      circle[index+1].classList.remove('active');
    },1)
  }
}

function nextFunc(){
  
  if (left <= max) {

    now = 0;
    index = 0;

    move = setInterval(function(){
      
      left = left + 10;

      if (left >= now) {
        clearInterval(move);
      }
      
      img.style.left = left + 'px';
      circle[index].classList.add('active');
      circle[imgleng-1].classList.remove('active');
    },1)
 
  } else {

    now = now - 700;
    index = index + 1;
    
    move = setInterval(function(){
      
      left = left - 10;

      if (left <= now) {
        clearInterval(move);
      }

      img.style.left = left +'px';

      circle[index].classList.add('active');
      circle[index-1].classList.remove('active');
    },1)
  }
}

function playFunc(){
  auto = setInterval(nextFunc, 3000);
}

function stopFunc(){
  clearInterval(auto);
}