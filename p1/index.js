var funcDiscount = require("./modules/calDiscount");

console.log("Olá Senac !")

var client = "Senac Campinas";

console.log(`Client: ${client}`);

var valProduct = 100;
var valDiscCount = 37;


var finalValue = funcDiscount(valProduct, valDiscCount);

console.log(`Valor do Produto com desconto: R$${finalValue}`);