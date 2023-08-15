const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados); 

const clienteEmString = JSON.stringify(dados);
// Serve para transmitir dados em texto JSON.stringify
console.log(typeof clienteEmString);
console.log(clienteEmString);

console.log(clienteEmString.nome); // UNDEFINED

const clienteParse = JSON.parse(clienteEmString);

console.log(typeof clienteParse);
console.log(clienteParse);