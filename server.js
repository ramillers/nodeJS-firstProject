const http = require("http"); //dentro dos parenteses colocar qual biblioteca quer importar 

http
    .createServer((request, response) => { //informar oq quer q ele faça dentro do creatServer
        response.writeHead(200, {"Content-Type": "application/json "});

        if (request.url === "/produto") {
            response.end(JSON.stringify({
                message: "rota de produto"
            }))
        }

        if (request.url === "/usuarios") {
            response.end(JSON.stringify({
                message: "rota de usuário"
            })
        );
    }
}) 
.listen(4001, () => console.log("servidor não está rodando na porta 4001"));

