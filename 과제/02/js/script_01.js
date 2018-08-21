/*
1. 구구단 구현하기

vue)
2 x 1 = 2
2 x 2 = 4
...

2단 ~ 9단까지
*/

for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(i + ' X ' + j + ' = ' + i * j);
    document.write('<br />');
  }
  document.write('<br />');
}
