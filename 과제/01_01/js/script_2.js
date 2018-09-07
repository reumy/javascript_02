window.onload = function(){
    
    var doc = document;
    var register_btn = doc.getElementById('register');

    register_btn.addEventListener('click',function(){

        var id = doc.getElementById('user_id')
        var pass = doc.getElementById('user_pass');
        var pass_confirm = doc.getElementById('user_pass_confirm');

        if ( !id.value ) {

            alert('아이디를 입력해주세요');
            return;
        }

        if ( !pass.value ) {

            alert('비밀번호를 입력해주세요');
            return;
        }

        if ( pass.value.length < 8  ) {

            alert('비밀번호는 8자리 이상 입력해주세요');
            pass.value = '';
            pass.focus();
            return;
        }

        if ( pass.value != pass_confirm.value ) {
            
            alert('비밀번호가 일치 하지 않습니다.');
            pass_confirm.value = '';
            pass_confirm.focus();
            return;
        }

        if ( id && pass && pass_confirm ) {

            alert('회원가입이 완료 되었습니다.');
        }
    });
}