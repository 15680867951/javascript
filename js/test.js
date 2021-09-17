class Star {
    constructor (x,y){
        this.x = x
        this.y = y
    }
    sum(){
        console.log(this.x + this.y)
    }
    say(){
     return '我是爸爸'
    }
    
}
class Son extends Star{
    constructor(x,y){
        super(x,y)
        this.x = x
        this.y = y
    }
    say(){
        console.log(super.say()+'的儿子')
    }
    sub(){
        console.log(this.x - this.y)
    }
    
}
var son = new Son(5,5)
son.sum()
son.sub()
