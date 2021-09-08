function sum(arr){
    var max=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
var arr=[5,2,99,101,67,77]
console.log(sum(arr))