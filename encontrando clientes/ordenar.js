const clientes = require("./clientes.json");

function ordena(lista, propriedade){
    const resultado = lista.sort((a, b) =>{
        if(a[propriedade] < b[propriedade]){
            return -1;
        }if(a[propriedade] > b[propriedade]){
            return 1
        }
        return 0;
    });
    return resultado;
}

const ordenaPorNome = ordena(clientes, "nome");

console.log(ordenaPorNome);

// Lembrando que esse código funciona por causa de código binarios ou seja A é menor que B em código binário tem uma tabela no google caso fique interessado(a), você pode pesquisar por "Alfabeto em binário" e vai conter imagens. Ou seja esse código está rodando o seguinte se A for menor que B você passa a receber B, se B for menor que C você recebe C e por ai vai, até a lista abacar no caso o Array em JSON.