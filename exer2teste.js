var jcontent = [{
    "id": 5677240,
    "name": "Cønjuntø de Pænelæs æntiæderentes ¢øm 05 Peçæs Pæris",
    "quantity": 21,
    "price": "192.84",
    "category": "Panelas"
  },
  {
    "id": 9628920,
    "name": "Lævæ & Se¢æ 10,2 Kg Sæmsung E¢ø ßußßle ßræn¢æ ¢øm 09 Prøgræmæs de Lævægem",
    "quantity": 57,
    "price": 3719.70,
    "category": "Eletrodomésticos"
}];

var category = jcontent.map(({category}) => category);
var price = jcontent.map(({price}) => price);
var quantity = jcontent.map(({quantity}) => quantity);
var eletrodm = category.filter(getCategory);

function getCategory(category){
    return category = "Eletrodomésticos";
}

switch (eletrodm){
    case 'Eletrodoméstico':
        getElementById('estoque').innerHtml = "Valor total do estoque de Eletrodm é " (price*quantity);
} 
console.log(eletrodm);