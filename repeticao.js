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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo != "object" && tipo != "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
