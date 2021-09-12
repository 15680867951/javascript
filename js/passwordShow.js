var pwd = document.getElementById('password')
var eye = document.getElementById('eye')
var flag = true;
eye.onclick = function(){
    if(flag){
        pwd.type='text'
        eye.src='../images/eyeOpen.jpg'
        flag = false;
    }else{
        pwd.type='password'
        eye.src='../images/eyeClose.jpg'
        flag = true;
    }
}