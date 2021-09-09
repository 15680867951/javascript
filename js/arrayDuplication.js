function remove(arr){
    var newArr = []
    for(i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
var demo = remove(['c','s','a','c','e','s','c'])
console.log(demo)