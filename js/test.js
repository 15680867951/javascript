var sum='';
for(i=1;i<10;i++){
    for(j=1;j<=i;j++){
    sum+=j+'*'+i+'='+j*i+' ';
    }
   sum+='\n'
}
console.log(sum)