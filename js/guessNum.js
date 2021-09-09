function guessNum(){
    var randomNum = Math.floor(Math.random() * 10)
    while(num!=randomNum){
        var num = prompt('请输入您要猜的数字')
        if(num>randomNum){
            alert('您输入的值大了')
        }else if(num<randomNum){
            alert('您输入的值小了')
        }else{
            alert('恭喜您，猜对了')
        }
    }
}
guessNum()


