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
  
  for(let part of parts) {
    stroka += "<tr><th>" + count + "</th><th>" + 
    part.getComplekt() + "</th><th>" + 
    part.getModel() + "</th><th>" + `<img style="height:200px;width:200px"src='` + 
    part.getKartinka() + "'></img>" + "</th></tr>";
    count++;
  }
  stroka += "</table>";
  document.getElementById('table').innerHTML += stroka;

function add(el){
    var name = document.getElementById('name');
    var model = document.getElementById('model');
    var stro4ka = "";
    stro4ka = "<tr><th>" + count + "</th><th>" + 
    name.value + "</th><th>" + 
    model.value + "</th><th>" + `<img style="height:200px;width:200px"src='` + 
    + "'></img>" + "</th></tr>";
    count++;
    document.getElementById('table').innerHTML += stro4ka;
    return false;
}