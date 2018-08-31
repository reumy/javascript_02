var doc = document;
var box = doc.getElementById('box');
var btnGroup = doc.getElementById('btn');
var btn = btnGroup.getElementsByTagName('button');

var num = '';
var txt;

function comma(){

  num += this.innerText;

  num = num + '';
  txt = '';

  for (var i = 0; i < num.length; i++) {
    
    if (i > 0 && (i % 3) == 0) {
      txt = num.charAt(num.length - i - 1) + ',' + txt;
    } else {
      txt = num.charAt(num.length - i - 1) + txt;
    }
  }
  return box.value = txt;
}

function comma_func(){
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', comma);
  }
}

comma_func();
