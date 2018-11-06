var myAge = 20; // variavel com minha idade
var earlyYears = 2; // idade humana mais nova dita no enunciado
earlyYears *=10.5; // Ou earlyYears = earlyYears*10.5 - multiplicação de earlyYears por 10.5, valor do ano de vida do cachorro multiplicada por 2 
var laterYears = 0; // criação de variável para diminuir por 2
laterYears = myAge -= 2;// Ou laterYears = myAge - 2 - com nova variável diminuirei o 2 do valor original da primeira variável
laterYears *= 4; //Ou laterYears = laterYears * 4 - calcular o numero de dog years a partir do laterYears
console.log(earlyYears);
console.log(laterYears);

var myAgeInDogYears = earlyYears + laterYears; // colocando os valores das 2 variáveis em uma só 
var myName = 'Mariana Soares'.toLowerCase(); // criando uma variável tipo string e colocando para lower case
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`)// colocando no console a var myName com myAgeDogYears usando interpolação
