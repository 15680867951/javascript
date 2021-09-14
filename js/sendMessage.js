var serch = document.getElementsByTagName('input')[0]
document.body.addEventListener('keyup', function (e) {
    if (e.key == 'a') {
        serch.focus();
    }
})

var btn = document.getElementsByClassName('contenter')[0].children[1];
var time = 5;
btn.addEventListener('click', function () {
    btn.disabled = true;

    var timer = setInterval(function () {
        if (time == 0) {
            clearInterval(timer);
            btn.disabled = false;
            btn.innerHTML = '发送'
            time = 5;
        } else {
            btn.innerHTML = '重新发送还剩' + time + '秒';
            time--;
        }
    }, 1000)
})