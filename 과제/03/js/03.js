var school = {
  count : 2,
  cls : [
    {a : 100, b : 50},
    {a : 70, b : 80}
  ]
}
var s_cls = school.cls;

function avg(arr){
 
  for (var i = 0; i < arr.length; i++){

    var sum = 0;
    var avg = 0;
    var student = Object.keys(arr[i]).length;

    for (key in arr[i]){
      sum += arr[i][key];
    }
    
    avg = sum / student;

    document.write((i + 1) + '반 평균 : ' + avg + '<br />');
  }
}

avg(s_cls);