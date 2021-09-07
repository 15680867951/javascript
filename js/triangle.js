var str = '';
for(i=0;i<=4;i++){
  for(j=0;j<=4;j++){
      str+='*'
  }
  str+='\n';  
}
console.log(str)
console.log('-----------------')
var str = '';
for(i=0;i<=4;i++){
  for(j=0;j<=i;j++){
      str+='*'
  }
  str+='\n';  
}
console.log(str)
console.log('-----------------')
var str = '';
for(i=4;i>=0;i--){
  for(j=i;j>=0;j--){
      str+='*'
  }
  str+='\n';  
}
console.log(str)

