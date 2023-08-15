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

// Manipulando lista de objetos
cliente.enderecos.push({
    rua: "R. Joseph",
    numero: 404,
    apartamento: true,
    complemento: "AP 1001",
})

// Usando o método filter para filtrar endereço 
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);