const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "21234556777",
    email: "andredomingos@gmail.com",
};

// Operador de ponto para retornar uma propriedade
console.log(`O nome do cliente é ${cliente.nome}, e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os três primeiros digitos do CPF são ${cliente.cpf.substring(0 , 3)}...`)

console.log(`Confime seu email em até 15 minutos o email é: ${cliente.email.substring(0, 8)}***${cliente.email.substring(13, 19)}***, Por favor confime seu email`)