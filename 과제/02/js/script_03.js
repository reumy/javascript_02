/*
3. 클래스 평균 구하기
{
  count : 2,
  cls : [
    {a : 100, b : 50},
    {a : 70, b : 80}
  ]
}
클래스는 2개의 학급
두 학급의 평균을 나열하시오
*/

var school = {
  count : 2,
  cls : [
    {a : 100, b : 50},
    {a : 70, b : 80}
  ]
}
var s_count = school.count;
var s_cls = school.cls;

for (var i = 0; i < s_cls.length; i++) {

  var sum = 0;
  var avg = 0;
  var cls_length = Object.keys(s_cls[i]).length;

  for (key in s_cls[i]){
    sum = sum + s_cls[i][key];
  }

  avg = sum / cls_length;

  document.write((i + 1) + '반 평균 : ' + avg);
  document.write('<br />');
}
