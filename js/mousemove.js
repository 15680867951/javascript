var img = document.body.children[0]
console.log(img)
document.addEventListener('mousemove',function(e){
    img.style.left = e.clientX-13+'px';
    img.style.top = e.clientY-13+'px';
})