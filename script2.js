


 var panelas = 0;
 var eletrodm = 0;
 var eletronicos = 0;
 var acessorios = 0;

for(i = 0; i < jcontent.length; i++){
  if(jcontent[i].category == 'Panelas')
    panelas += parseFloat(jcontent[i].price)*qntity(jcontent[i].quantity);
  else if(jcontent[i].category == 'Eletrônicos')
    eletronicos += parseFloat(jcontent[i].price)*qntity(jcontent[i].quantity);
  else if(jcontent[i].category == 'Eletrodomésticos') 
    eletrodm += parseFloat(jcontent[i].price)*qntity(jcontent[i].quantity);
  else if(jcontent[i].category == 'Acessórios')
    acessorios += parseFloat(jcontent[i].price)*qntity(jcontent[i].quantity);
}
// testes:
// console.log(panelas.toLocaleString('pt-BR', { minimumFractionDigits: 2}))
// console.log(eletronicos.toLocaleString('pt-BR', { minimumFractionDigits: 2}))
// console.log(eletrodm.toLocaleString('pt-BR', { minimumFractionDigits: 2}))
// console.log(acessorios.toLocaleString('pt-BR', { minimumFractionDigits: 2})) 

document.getElementById('EstoqueA').innerHTML = "Valor total do estoque -> Acessório: " + acessorios.toLocaleString('pt-BR', { minimumFractionDigits: 2});
document.getElementById('EstoqueEdm').innerHTML = "Valor total do estoque -> Eletrodomésticos: " + eletrodm.toLocaleString('pt-BR', { minimumFractionDigits: 2});
document.getElementById('EstoqueEn').innerHTML = "Valor total do estoque -> Eletrônicos: " + eletronicos.toLocaleString('pt-BR', { minimumFractionDigits: 2});
document.getElementById('EstoqueP').innerHTML = "Valor total do estoque -> Panela: " + panelas.toLocaleString('pt-BR', { minimumFractionDigits: 2});

function qntity(input) {
  if (input == null) {
      return 0;
  } else {
      return input;
  }
}