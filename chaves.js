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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.error(`Erro. É necessario ter um endereço cadastrado.`);
}else{
    console.log("Tem um endereço cadastrado!")
}