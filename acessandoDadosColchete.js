const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "21234556777",
    email: "andredomingos@gmail.com",
};


console.log(`O nome do cliente é ${cliente["nome"]}, e essa pessoa tem ${cliente["idade"]} anos`);


// Acessando campos que talvez a gente n tenha no nosso código em sí.
 
const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

