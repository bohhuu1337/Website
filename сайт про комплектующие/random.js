function randomcolor() {
  var red = Math.floor(Math.random() * 255) + 1;
  var green = Math.floor(Math.random() * 255) + 1;
  var blue = Math.floor(Math.random() * 255) + 1;

  var color = `linear-gradient(45deg, rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}),
  rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1}))`;

  document.getElementById('random color').style.background = color;
}

function randombutton() {
  var link = ["karta.html", "korpus.html", "mat.html", "procesor.html", "ozu.html", "computer.html"]

  document.getElementById('randomlink').addEventListener("click", function () {
    var url = link[Math.floor(Math.random() * link.length)];
    this.href = url;
  })
}

function randomstr() {
  var rand = Math.floor(Math.random() * 4);
  var test = {
    0: "<a href='karta.html'<font class='button1'>Видеокарточки</font></a>",
    1: "<a href='korpus.html'<font class='button2'>Корпусы</font></a>",
    2: "<a href='procesor.html'<font class='button3'>Процессоры</font></a>",
    3: "<a href='ozu.html'<font class='button4'>Оперативная память</font></a>",
    4: "<a href='computer.html'<font class='button5'>Главная страничка</font></a>",
  };

  document.getElementById('pukpuk').innerHTML += test[rand];
}

randomcolor();
randombutton();
randomstr();

class Zhelezo {
  "Комплектующая";
  "Модель";
  "Картинка";
  constructor(complekt, model, kartinka) {
    this.Комплектующая = complekt;
    this.Модель = model;
    this.Картинка = kartinka;
  }

  getComplekt() {
    return this.Комплектующая;
  }
  getModel() {
    return this.Модель;
  }
  getKartinka() {
    return this.Картинка;
  }
};

let parts = [
  new Zhelezo("Видеокарта", "RTX 2070", "https://www.tradeinn.com/f/13743/137432077/msi-geforce-rtx-2070-super-ventus-8gb-gddr6-graphic-card.jpg"),
  new Zhelezo("Процессор", "Intel Core i5 12400F OEM Alder Lake LGA1700", "https://www.market777.ru/upload/iblock/c7d/ekzks66nrlf7go52p1g4u153dnouc4x2.jpg"),
  new Zhelezo("Оперативная память", "16Gb 3200MHz Kingston Fury Beast Black", "https://media.kingston.com/kingston/product/ktc-product-beast-ddr4-rgb-dimm-1-angled-zm-lg.jpg"),
  new Zhelezo("Корпус", "AeroCool Aero One Frost Black TG", "https://c.dns-shop.ru/thumb/st4/fit/300/300/2b49b7761e85cf5c86977e3a4b9fab70/b9693dc7d401f8020aa78d9a6c8ed8f6cdde434f5b04136e996b415c4760d167.jpg"),
  new Zhelezo("Материнская плата", "MSI MAG B660M MORTAR MAX WIFI DDR4 mATX LGA1700", "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/7700500f425128c7c04cf7fc310e9e2c/3be56fc74a286b0170c5055b9a0c054d6ff0aa1c7584f78c3ecd8ce59510ce56.jpg.webp")
];
var count = 1;
var stroka = "";

for (let part of parts) {
  stroka += "<tr><th>" + count + "</th><th>" +
    part.getComplekt() + "</th><th>" +
    part.getModel() + "</th><th>" + `<img style="height:200px;width:200px"src='` +
    part.getKartinka() + "'></img>" + "</th></tr>";
  count++;
}
stroka += "</table>";
document.getElementById('table').innerHTML += stroka;


var menu = document.getElementsByClassName('menu');
var shortInform = [
  "На первой странице сайте рассказывается об общем представлении комплектующих пк",
  "На второй странице сайте рассказывается об видеокартах",
  "На третьей странице сайте рассказывается об процессорах",
  "На четвертой странице сайте рассказывается об материнских платах",
  "На пятой странице сайте рассказывается об корпусах",
]
var i = 0;
setInterval(function () {
  if (i == 5)
    i = 0;
  menu[0].innerHTML = shortInform[i];
  i++;
}, 3000);

setTimeout(reklama, 2000);
function reklama() {
  var fon = document.createElement('div');
  fon.id = 'adblock';
  var banner = document.createElement('div');
  banner.id = 'banner';
  var text = document.createElement('p');
  text.id = 'textbanner';
  var img = document.createElement('img');
  img.id = 'close';
  img.src = 'http://phonoteka.org/uploads/posts/2022-09/1663786491_8-phonoteka-org-p-krasnii-krestik-bez-fona-instagram-14.jpg';

  document.getElementsByTagName('body')[0].appendChild(fon);
  fon.appendChild(banner);
  banner.appendChild(img);
  banner.appendChild(text);

  text.innerHTML += 'А уот здесь уот могла быть ваша реклама, но ее нет :(';
  img.addEventListener('click', function () {
    document.getElementById('adblock').remove();
  })
}

