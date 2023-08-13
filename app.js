const express = require ("express"); //importando express
const { randomUUID } = require("crypto") //vai dar um numero randomico pra pro id do produto
const fs = require("fs")

const app = express(); //incializando express que é uma função

app.use(express.json()); //"use" funciona como um middleware que analisa o corpo das requisições em  em formato JSON e popula o objeto req.body com os dados enviados no corpo da requisição.

let products = []; //imaginar esse array como nosso "banco de dados"

// VAI PEGAR O DATA E JOGAR PRA DENTRO DO ARRAY DE PRODUTOS
fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        product = JSON.parse(data); //traz o JSON de volta pro formato de objeto
    }
});

//INSERIR INFORMAÇÕES
app.post("/products", (request, response) => {

    const { name, price } = request.body;

    const product = {
        name, 
        price,
        id: randomUUID()
    }

    products.push(product); //dando um push direto no objeto (inserindo no array)

    //ao inserir um produto no array, atualizar o arquivo
    productFile();

    return response.json(product);
});

//BUSCAR TODOS OS PRODUTOS/INFORMAÇÕES
app.get("/products", (request, response) => {
    return response.json(products)
})

//ENCONTRAR PRODUTO POR "ID"
app.get("/products/:id", (request, response) => {
    const {id } = request.params; //desestruturou o "request" por parametro pra pegar só o "id"
    const product = products.find(product => product.id === id); //vai percorrer o array e qnd encontrar um produto cujo "id" seja igual ao id da rota, vai parar e retorna o produto (retorna o objeto completo)
    return response.json(product);
})

//ALTERAR INFORMAÇÕES DOS PRODUTOS
app.put("/products/:id", (request, response) => {
    const {id } = request.params; //item q quero alterar
    const { name, price } = request.body; //receber os dados q irei alterar

    //encontrar qual o objeto que de fato queremos alterar (pelo index)
    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] = {
        ...products[productIndex], //restOperator = pega todas as informações do product menos "name" e "price" (sobrescreve)
        name,
        price 
    };

    productFile();

    return response.json({ message: "Produto alterado com sucesso" });
});

//DELETAR PRODUTOS
app.delete("/products/:id", (request, response) => {
    const {id } = request.params; 

    const productIndex = products.findIndex(product => product.id === id); //index do prod q queremos remover

    products.splice(productIndex, 1) //vai achar o index e remover uma posição

    productFile();

    return response.json({ message: "Produto removido com sucesso!"});
})

function productFile() {
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Produto inserido! ");
        }
            
        });
}

app.listen(4002, () => console.log("Servidor tá rodando na porta 4002"));

