
var Fmoney=100;
var Lmoney;
do{ 
    var num = prompt('请输入您要的操作'+'\n'+'1.存钱'+'\n'+'2.取钱'+'\n'+'3.显示余额'+'\n'+'4.退出');
    switch(parseInt(num)){
        case 1:
            var save = prompt('请输入您的存款金额');
            Lmoney = parseFloat(save)+Fmoney;
            alert('您已成功存入'+save+'元，当前余额为'+Lmoney+'元');
            Fmoney+=parseFloat(save);
            break;
        case 2:
            var save = prompt('请输入您的取款金额');
            Lmoney=Fmoney-parseFloat(save);
            alert('您已成功取出'+save+'元，当前余额为'+Lmoney+'元');
            Fmoney-=parseFloat(save);
            break;
        case 3:
            alert('您的当前余额为'+Fmoney+'元');
            break;
    }
}while(num!=4)

