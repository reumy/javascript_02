var doc = document;

var next = doc.getElementById('next'); // 선택자
var prev = doc.getElementById('prev'); // 선택자
var play = doc.getElementById('play'); // 선택자
var pause = doc.getElementById('pause'); // 선택자

var item = doc.querySelector('.item'); // 클래스로 선택자
var litag = item.getElementsByTagName('li');
var count = litag.length; // 태그 갯수 // 5


// 슬라이드 옵션 설정
var dist = 0; // ul 이 이동한 거리
var num = 0; // ul의 실시간 이동 내역
var banner = 700; // 배너 하나당의 넓이 // 확장성
var time = 10; // 슬라이드 속도를 조절한다. 숫자 높을수록 빨라진다.
var last = -(banner * (count-1)); // 전체 슬라이드가 최종 움직일 이동거리
var mstart;
var move_count = 0; // 배너의 위치 표시

var circle = doc.getElementById('circle').getElementsByTagName('div');
// circle[0]

next.addEventListener('click',nextBtn);
prev.addEventListener('click',prevBtn);
play.addEventListener('click',autoStart);
pause.addEventListener('click',autoPause);

function nextBtn(){

    if ( dist <= last ) {

        var turn = setInterval(function(){

            dist = dist + (time * 2);

            if ( dist >= 0 ) {

                clearInterval(turn);
                num = 0;
                move_count = 0;

                circle[move_count].classList.add('active');
                circle[circle.length - 1].classList.remove('active');
            }

            item.style.transform = 'translateX(' + dist + 'px)';
        },5)

    } else {

        dist = dist - banner;

        var sliding = setInterval(function(){

            num = num - time;

            if ( num <= dist ) {

                clearInterval(sliding);
                move_count++;

                circle[move_count].classList.add('active');
                circle[move_count-1].classList.remove('active');
            }

            item.style.transform = 'translateX(' + num + 'px)';
        },5);
    }
}

function prevBtn(){

    if ( dist >= 0 ) {

        var turn = setInterval(function(){

            dist = dist - (time * 2);

            if ( dist <= last ) {

                clearInterval(turn);
                num = last;
                move_count = circle.length - 1;

                circle[circle.length - 1].classList.add('active');
                circle[0].classList.remove('active');
            }

            item.style.transform = 'translateX(' + dist + 'px)';
        },5)

    } else {

        dist = dist + banner;

        var sliding = setInterval(function(){

            num = num + time;

            if ( num >= dist ) {

                clearInterval(sliding);

                move_count--;
                circle[move_count].classList.add('active');
                circle[move_count + 1].classList.remove('active');
            }

            item.style.transform = 'translateX(' + num + 'px)';
        },5);
    }
}

function autoStart(){

    mstart = setInterval(function(){

        nextBtn(); // 호출
    },4000);
}

function autoPause(){

    clearInterval(mstart);
}
