var valor = 20;
if ( valor > 100 )
    console.log("Valor maior que 100");
else
   console.log("Valor menor que 100");

   var dia = 200;
   if ( dia > 100 )
       console.log("dia maior que 100");
   else
      console.log("dia menor que 100");

var preco = 18;
   if (preco < 10) {
    console.log(teste = "Valor menor que 10");
  } else if (preco < 20) {
    console.log(teste = "valor entre 10 e 20");
  } else {
    console.log(teste = "maior de 20");
  }
var preco = 80;
  if (preco < 10) {
    console.log(teste = "Valor menor que 10");
  } else if (preco < 20) {
    console.log(teste = "valor entre 10 e 20");
  } else {
    console.log(teste = "maior de 20");
  }
 
 

 for (var i = 0; i < 9; i++) {
  console.log(i);

}
console.log("loop 2")
  for (var p = 0; p < 20; p++) {
    console.log(p);
  
  
  
  }


  let resposta = "sim";

  while (resposta === "sim") {
  
      console.log("Olá! Gostaria de sair novamente para comer hoje?"); 
  
      resposta = prompt("Digite 'sim' para continuar ou qualquer outro valor para sair:");
  
  }


  let t = 10;
  console.log("Loop até 100"); 

while (t <= 100) {
  console.log(t);
  t++;
}

const matéria = "Matemática";

switch(matéria) {
case "Matemática":
console.log ("Indicada para pessoas boas com números");
break;

case "Português":
console.log ("Indicada para pessoas habilidosas com gramática");
break; 

case "Educação Física":
console.log ("Indicada para pessoas com habilidades físicas");
break;
}

const diaDaSemana = "Segunda";
switch (diaDaSemana) {
    case "Segunda":
        console.log("Ainda há muito o que ser feito, prossiga");
        break;
    case "Terça":
        console.log("Ok, siga em frente, não pare");
        break;
    case "Quarta":
        console.log("Você está  indo bem, mantenha-se");   
        break;
    case "Quinta":
        console.log("Quase lá");       
        break;
    case "Sexta":
        console.log("O mais complicado foi feito, desfrute");
        break;
    case "Sabado":    
        console.log("Descanse e recarregue suas forças");
        break;
    case "Domingo":
        console.log("São os últimos momentos, amanhã tudo começará novamente");   
        break;
}