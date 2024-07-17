//изменение кнопки
var react = document.querySelectorAll('.button');

function clickOnButton(event) {
    var color = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
    var colorText = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;

    this.innerHTML = "Нажато";
    this.style.backgroundColor = color;
    this.style.color = colorText;
    event.stopPropagation();
    console.log(event.target);
}
function mouseOver(event) {
    this.innerHTML = "Наведено";
    this.style.fontSize = "40px";
    event.stopPropagation();
    console.log(event);
}
function mouseOut(event) {
        this.innerHTML = "Не наведено";
        this.style.fontSize = "25px";
        event.stopPropagation();
        console.log(event);
}
react.forEach(button => {
    button.addEventListener("click", clickOnButton);
    button.addEventListener("mouseover", mouseOver);
    button.addEventListener("mouseout", mouseOut);  
})


//добавление <li>
var spisok = document.querySelectorAll('div .add');
function add() {
    var ul = document.getElementById('1').innerHTML; 
    var li = document.getElementById('1').innerHTML += "<li>Новый</li>";
    var spisok1 = document.querySelectorAll('li');
    
    function changecolor(event) {
        if(this.innerHTML == "Новый") {
            this.innerHTML = "Старый";
        }
            else if(this.innerHTML == "Старый") {
                this.innerHTML = "Очень старый";
            }
            else if(this.innerHTML == "Очень старый") {
                event.currentTarget.remove();
            }
    }

    spisok1.forEach(click => {
        click.addEventListener("click", changecolor)
    })
}

spisok.forEach(button => {
    button.addEventListener("click", add);
})


//изменение текста тега <li>
var spisok1 = document.querySelectorAll('li');

function changecolor(event) {
    
    if(this.innerHTML == "Новый") {
        this.innerHTML = "Старый";
    }
    else if(this.innerHTML == "Старый") {
        this.innerHTML = "Очень старый";
    }
    else if(this.innerHTML == "Очень старый") {
        event.target.remove();
    }
}

spisok1.forEach(click => {
    click.addEventListener("click", changecolor)
})


//координаты клика
var circle = document.querySelector('#circle');

window.addEventListener('click', function(event) {
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
});