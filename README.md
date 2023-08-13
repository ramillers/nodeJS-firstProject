# nodeJS-firstProject

Este é o meu primeiro projeto (feito com videoaula da rocketseat) utilizando o Node.js, onde estou aprendendo a criar rotas com o framework Express. Neste projeto, estou explorando como adicionar, alterar e deletar informações de um arquivo por meio de requisições HTTP.

## Instalação

1. Certifique-se de ter o Node.js instalado no seu sistema.
2. Clone este repositório: `git clone https://github.com/seu-usuario/seu-projeto.git`
3. Acesse o diretório do projeto: `cd seu-projeto`
4. Instale as dependências: `npm install`

## Uso

1. Inicie o servidor: `npm start`
2. O servidor estará rodando em: `http://localhost:4002`
3. Use uma ferramenta como o [Postman](https://www.postman.com/) ou [curl](https://curl.se/) para testar as rotas.

## Rotas

### Adicionar um Produto

**Requisição HTTP:** POST
**URL:** `http://localhost:4002/products`
**Corpo da Requisição:**
```json
{
    "name": "lapis",
    "price": 15
}
