### 0728 (05~06)
```
var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
  var number = document.getElementById('number').value;
  if (!number) { 
      console.log('숫자를 입력해주세요');
      return;
  }
  console.log(number);
});
```
- 코드해석
```
if (!number) {...}
```
> 조건에 값만 들어있는 경우는 값이 있으면 true 값이 없으면 false가 됨 즉, number(자료)가 있으면(true)의 부정이므로 값이 없을경우 실행 됨
- `return : retrun을 만나면 다음코드를 실행하지 않음`
- 결과
> 값을 입력하고 버튼을 누르면 콘솔에 값이 찍히고, 아무것도 입력하지 않으면 콘솔에 '숫자를 입력해주세요'가 뜸

## 과제평가
- 인덴트가 많이 들어가면 가독성이 떨어짐 (script)
- if문은 순서대로 체크하기때문에 각각 나누어 return으로 종료시키는편이 가독성면에서 더 좋음 (script_2)
- else if는 다음거를 체크 안하기 때문에 하나가 통과를해도 다음거를 체크하도록 하는게 좋음 (if로 각각하는 이유)

