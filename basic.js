console.log('Olá Javascript!')

var userName = 'Nairo Santos'

document.getElementById('user-name').innerHTML = userName


//var nome ='Mestre Yoda'
//var idade = 100
//var jedi = true 

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)


//operadores de comparaçao

// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
3==='3' //false
3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
3!=='3' //true
3!==3 //false
3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1>2 //false
5>3 //true
4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1>=2 //false
5>=3 //true
4>='1' //true
2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
1<2 //true
5<3 //false
4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
1<=2 //true
5<=3 //false
4<='1' //false
2<=2 // true

//funçoes

//function soma(n1,n2) {
//    console.log(n1+n2)

//}

//soma(5,5)


//function boasvindas(nome){
 //   alert(nome + ', seja bem vindo(a)')
//}

//boasvindas('Nairo')

//controle de fluxos //

//sendo um cliente correntista do banco
//posso sacar dinheiro em caixas eletronicos
//para comprar em lugares que nao aceitam cartao de credito ou debito

//var saldo = 1000

//function saque(valor){
    
 //   if(valor > saldo){
 //       console.log('valor do saque é superior ao saldo')
 //   } else if(valor > 700){
 //       console.log('valor do saque é superior ao maximo permitido por operação')
 //   }
  //  else {
  //      saldo = saldo - valor
 //   }
   
///}

//saque(701)
//console.log(saldo)

// Cenario 1: saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo 

//Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando eu faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

//Cenario 3: Saque com valor maximo
// Dado que meu saldo é de 1000 reais
// E o valor maximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// Arrays //

//var gaveteiro = ['Meias', 'gravatas', 'documentos', 'Salgadinhos']


//console.log(gaveteiro[1])

//var personagens = ['Mestre Yoda', 'Luke Skywalker','Princesa Leia', 'Darth Vader']
//personagens.push('C3pO')
//personagens.push('R2D2')

//personagens.pop()

//personagens = personagens.filter(function(p){
 //   return p !== 'Darth Vader'
//})

//console.log(personagens)
