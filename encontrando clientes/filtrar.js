const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(listaDeClientes){
    return listaDeClientes.filter((cadaCliente) =>{
        return (cadaCliente.endereco.apartamento && 
            !cadaCliente.endereco.hasOwnProperty("complemento")); // nao quero que tenha complemento
    });
}

const clientesFiltrados = filtrarApartamentosSemComplemento(clientes);

console.log(clientesFiltrados);