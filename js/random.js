function getRandom(min,max){
    return Math.floor(Math.random() * (max-min + 1))+min;
}
var arr = ['陈芋龙','杨苏红']
console.log(arr[getRandom(0,arr.length-1)]);
