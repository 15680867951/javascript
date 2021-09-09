function Hero(name,type,blood){
    this.name = name;
    this.type = type;
    this.blood = blood;
    this.attack = function(attackType){
        console.log(attackType)
    }
}
var lianpo = new Hero('廉颇','力量型',500)
lianpo.attack('近战')
var houyi = new Hero('后羿','射手型',100)
houyi.attack('远程')
console.log(lianpo)
console.log(houyi)
console.log(typeof houyi)