var arrcolor = ["rgb(0, 128, 0)", "rgb(68, 148, 74)", "rgb(168, 228, 160)", "rgb(189, 236, 182)", "rgb(30, 89, 69)", "rgb(71,167,106)"];
var element = document.getElementsByTagName('div');
setInterval(function() {
    for(var i = 0; i < element.length; i++) {
        element[i].style.background = arrcolor[i];  
    }
    arrcolor = arrcolor.concat(arrcolor.splice(0, arrcolor.length - 1));//concat добавляет к массиву другой массив, splice удаляет все значения массива в выбранном диапозоне
    console.log(arrcolor);
}, 1000);

function htmlspisok() {
    var arrhtml = [];
    var i = 0; 
    var ul = document.createElement('ul');
    while(vhod != "") {
       var li = ul.appendChild(document.createElement('li'));
       var vhod = prompt("Введите данные массива: ");

       if(vhod == "")
           break;

       arrhtml[i] = vhod;
       li.appendChild(document.createTextNode(arrhtml[i]));
       document.querySelector('body').appendChild(li);
       i++;
    };
}

htmlspisok();

function randomPost() {
    var arrLinkImage = [
        "https://i.scdn.co/image/ab67616d0000b273f629e1b41d71095d70ec9e1c",
        "https://i.scdn.co/image/ab67616d0000b273ab5bbb4b342c3d35575f23cb",
        "https://images.genius.com/43f3de0cbe0e85cca4052abc7ab29790.1000x1000x1.jpg",
        "https://images.genius.com/7d9a3258e5343e948c8022443deb1c52.1000x1000x1.jpg",
        "https://i.scdn.co/image/ab67616d0000b2734277d5a9f4bdaa9611e7464a"
    ];

    var arrLinkText = [
        "Почему ты еще не фанат?",
        "Гимн дахака",
        "Тп на аме",
        "О как же хорошо, что моя тима не в курсе",
        "Бро, ты нереальный талант",
        "Никого не слушай",
        "Оу щит, я придурок",
        "Бек шмерек шмек шмек"
    ];
    
    var arrPost = [

    ];

    
    var vhod = prompt("Введите количество постов: ");
    var vhod1 = prompt("Введите количество предложений: ");

    for(var i = 0; i < vhod; i++) {
        var div = document.getElementById('post');
        var div1 = document.createElement('div');
        var color = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
        var colorText = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;

        div.style.width = "100%";
        div1.style.borderStyle = "double"
        div1.style.margin = "10px";
        div1.style.backgroundColor = color;

        var img = document.createElement('img');

        img.style.paddingLeft = "20px";
        img.style.paddingRight = "20px";
        img.style.paddingTop = "20px";

        img.src = arrLinkImage[Math.floor(Math.random() * arrLinkImage.length)];
        div1.appendChild(img);
        div.appendChild(div1);

            for(var j = 0; j < vhod1; j++) {
                var p = document.createElement('p');
        
                p.style.paddingLeft = "20px";
                p.style.paddingRight= "20px";
                p.style.color = colorText;
                
                p.appendChild(document.createTextNode(arrLinkText[Math.floor(Math.random() * arrLinkText.length)]));
                div1.appendChild(p);
                
            }
            document.querySelector('body').appendChild(div);

    }
}

randomPost();