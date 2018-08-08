window.onload = function(){

    var doc = document;
    var register_btn = doc.getElementById('register');

    register_btn.addEventListener('click',function(){

      var id = doc.getElementById('user_id').value;
      var pass = doc.getElementById('user_pass').value;
      var confirm = doc.getElementById('user_pass_confirm').value;

      if (id) {
        if (pass) {
          if (pass.length < 8) {
            alert('비밀번호는 8자 이상 작성해주세요.')
          } else if (confirm) {
            if (pass === confirm) {
              alert(id + '님 환영합니다!\n회원가입이 완료되었습니다.')
            } else if (pass !== confirm) {
              alert('비밀번호가 다릅니다.')
            }
          } else {
            alert('비밀번호를 확인해주세요.')
          }
        } else if (!pass) {
          alert('비밀번호를 입력해주세요.')
        }
      } else {
        alert('아이디를 입력해주세요.')
      }

        /*

            1. 아이디가 없을경우 경고
            2. 비밀번호가 없을경우 경고
            3. 비밀번호는 8자리 이상 작성해야 한다.
            4. 비밀번호와 비밀번호확인 서로 같아야 한다.
            5. 모든것이 완료가 되면 "회원가입이 완료 되었습니다." 경고창

        */


    });
}
