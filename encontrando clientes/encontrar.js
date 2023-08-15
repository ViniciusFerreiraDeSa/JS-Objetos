const clients = require("./clientes.json");

function encontraCliente(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontraCliente(clients, "nome","Kirby");

const encontrado2 = encontraCliente(clients, "telefone", "3149463623");
console.log(encontrado2); 