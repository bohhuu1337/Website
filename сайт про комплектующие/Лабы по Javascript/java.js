var name1 = prompt('Введите номер картинки от 0-3?'); //результат – строка
var arr=['пк1.jpg','пк2.jpg','hehe.jpg','пк.jpg'];
if(name1<0 || name1>3){
    alert('Вы ввели некорректный номер');
}
else{
alert('Вы ввели корректный номер',name1);
document.getElementById("test").innerHTML=`<img style="width: 300px;height: 300px; display:block;padding:10px;margin-left: auto;margin-right: auto;" src="picture/${arr[name1]}">`;
};
    function spisok(){
     while(stroka!=''){
        var stroka=prompt('Введите строку');
        document.getElementById('sp').innerHTML+=`<ul><li>${stroka}</li>`;
    }
    }
    spisok();
    function factoral(){
    var chislo=prompt('Число факториал');
    if(chislo % 1!=0){
console.log('ОШИБКА!');
    }
    else{
    var chislo1=chislo;
    var fact=1;
    while(chislo!=0){
    fact=fact*chislo
    chislo--;
    }
    alert(`Факториал числа ${chislo1}! = ${fact}`);
}
 }
factoral();
var randnumber=Math.floor(Math.random()*100)+0;
alert('Случайное число:'+ randnumber);
while (number!= randnumber){
var number = prompt('Введите число и угадайте его, чтобы начать работу на сайте, число находится в интервале от 0 до 100');
document.getElementById('vhod').innerHTML+=' '+number;
if(number==randnumber){
    alert('Вы угадали число');

    break;
}
else if(number>randnumber){
    alert('Вы не угадали число, меньше');
}
else{
    alert('Вы не угадали число, больше');
}
}


 
