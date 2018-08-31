var doc = document;
var li = doc.getElementById('list');
var box = li.getElementsByClassName('box');

for (var i = 0; i < box.length; i++) {

  box[i].addEventListener('click',function(){

  	for (var i = 0; i < box.length; i++) {
  		box[i].style.color = 'black';
  	}

  	this.style.color = 'black';

  	if (this == box[0]) {
  		this.nextElementSibling.style.color = 'red';
  	}

  	if (this == box[box.length - 1]) {
  		this.previousElementSibling.style.color = 'red';
  	}

  	if (this != box[0] && this != box[5]) {
    	this.previousElementSibling.style.color = 'red';
    	this.nextElementSibling.style.color = 'red';
  	}

  });
}