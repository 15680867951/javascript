
var num = prompt('请输入班级人数') 
var sum = 0;

for(i=1;i<=num;i++){
    var socre=prompt('请输入第'+i+'个同学的成绩')
    sum=sum+parseFloat(socre);
}
var avg = sum/num;
alert('班级的总成绩为'+sum+'\n'+'班级的平均分为'+avg)