const cliente = {
    nome: "Samuel",
    idade: 22,
    cpf: "21122596977",
    email: "sammuel@gmail.com",
    telefone: ["115532350", "114432340"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor >= this.saldo){
            console.log(`Saldo insuficiente!`);
        }else{
            this.saldo -= valor;
            console.log(`Sua compra foi realizada ${cliente.nome}. Novo saldo: ${this.saldo}`);
        }
    }
};
cliente.efetuaPagamento(400)
cliente.efetuaPagamento(30)