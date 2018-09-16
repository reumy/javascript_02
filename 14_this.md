## this
- `객체`(object)
- `호출`을 기준으로 형성
- 객체의 `상황`에 따라 달라짐
- node에서 this와 웹에서의 this는 다르게 출력됨
> 웹 환경에서 전역은 window이며 window 자체가 객체이기 때문
- 객체는 결국 값이며, 데이터의 묶음
```
var self = this;
console.log(self);
```
> window 정보가 출력됨
```
var man = {
  name : 'one',
  say : function(){
    console.log(this);
    console.log('a');
  }
}

console.log(man);  // {name: "one", say: f}
```
> man을 보여줌
```
var n = man.name;
console.log(n);  // one
```
> 객체 호출
```
man.say();  // {name: "one", say: f}, a
```
> man은 객체라서 man 안에 this는 man을 가르킴
```
var s = man.say;
s();  // window{...}, a
```
> 전역변수 s 는 전역공간에 존재하기 때문에 window에서 호출되는 것이므로 this가 window를 가르킴
```
var p = s.bind(man);
p();  // {name: "one", say: f}, a
```
> man을 바인딩(붙여주기)해주면 다시 man을 가르킴
```
<button id="btn">버튼</button>
```
```
var doc = document;
var s = man.say;

doc.getElementById('btn').addEventListener('click',s);
// <button id="btn">버튼</button>, a
```
> 같은 s 지만 호출되는 시점에서 달라져 this는 dom 객체인 태그를 가르킴
```
doc.getElementById('btn').addEventListener('click',p);
// {name: "one", say: f}, a
```
> 바인딩 시켜줬기때문에 this는 man을 가르킴
```
var btn2 = doc.getElementById('btn2');

var obj = {
  count : 0,
  increse : function(){
    console.log(count);  // 에러
  }
}

obj.increse();
```
```
increse : function(){
  console.log(obj.count);  // 0
  console.log(this.count);  // 0
}
```
> this는 obj를 가르킴
```
increse : function(){
  btn2.addEventListener('click',function(){
    console.log(this);  // <button id="btn2">버튼2</button>
  })
}
```
> 호출되는 시점이 버튼을 누를때라서 버튼 태그를 가르킴
```
increse : function(){
  btn2.addEventListener('click',function(){
    console.log(this.count);  // undefined
  })
}
```
> this는 버튼태그를 가르키고 있기 때문
```
increse : function(){
  btn2.addEventListener('click',
  (function(){
    console.log(this.count);  // 0
  }).bind(this));
}
```
> 바인딩을 통해서 this가 obj일때를 넘겨줌
```
increse : function(){
  btn2.addEventListener('click',function(){
    setInterval(function(){
      console.log(this);  // window{...}
    },2000)
  })
}
```
> setInterval은 단순히 호출하는 메소드라서 원래가  window.setInterval 이므로 window를 가르킴
```
increse : function(){
  btn2.addEventListener('click',function(){
    var self = this;
    setInterval(function(){
      console.log(self);  // <button id="btn2">버튼2</button>
    },2000)
  })
}
```
> this를 호출되기전에 미리 변수로 선언해주었기 때문에 바인딩을 시켜주지 않아도 태그를 가르킴
```
increse : function(){
  btn2.addEventListener('click',function(){
    var self = this;
    setInterval(function(){
      console.log(self.count);  // undefined
    },2000)
  })
}
```
```
increse : function(){
  btn2.addEventListener('click',
  (function(){
    var self = this;
    setInterval(function(){
      console.log(self.count);  // 0
    },2000)
  }).bind(this));
}
```
### es5, es6
- es5 함수는 this가 존재하지만 es6의 애로우 함수는 this가 적용되지 않음
- 장점 : this가 바뀔일이 없어서 실수가 적어짐
```
var f1 = function(){
  console.log(this);  // window{...}
}

f1();
```
```
var f1 = () => {
  console.log(this);  // window{...}
}

f1();
```
- 호출 시점
```
var btn3 = doc.getElementById('btn3');

btn3.addEventListener('click',f1);
```
```
var f1 = function(){
  console.log(this);  // <button id="btn3">버튼3</button>
}
```
```
var f1 = () => {
  console.log(this);  // window{...}
}
```
