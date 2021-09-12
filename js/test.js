var password = document.getElementById('password')
var img = document.querySelector('img')
var flag = true;
img.onclick = function(){
    if(flag){
        password.type='text'
        img.src='../images/eyeOpen.jpg'
        flag = false;
    }else{
        password.type='password'
        img.src='../images/eyeClose.jpg'
        flag = true;
    }
}