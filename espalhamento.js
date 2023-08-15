const cliente = {
    nome: "Samuel",
    idade: 22,
    cpf: "21122596977",
    email: "sammuel@gmail.com",
    telefone: ["115532350", "114432340"],
};

cliente.enderecos = [
    {
    rua: "Rua Mafrenzs",
    numero: 75,
    apartamento: false,
    complemento: false,
    cep: "04851713"
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0], // espalhamos os endereços, ficou como se fosse um unico objeto
}

console.log(encomenda);