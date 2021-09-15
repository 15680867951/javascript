var dragBox = document.getElementsByClassName('drag')[0];
dragBox.addEventListener('mousedown',function(e){
    var x = e.pageX - dragBox.offsetLeft;
    var y = e.pageY - dragBox.offsetTop;
    document.addEventListener('mousemove',move)
    function move(e){
        dragBox.style.left = e.pageX - x + 'px'
        dragBox.style.top = e.pageY - y + 'px'
     }
    document.addEventListener('mouseup',function(){
        document.removeEventListener('mousemove',move)
    })
})