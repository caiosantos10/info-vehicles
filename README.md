# info-vehicles

## Estrutura de pastas
### /api
Api construída em node.js, utilizando express e mongodb através do mongoose.
### /info-vehicles-app
Frontend da aplicação desenvolvido em angular.

### Observações
Para rodar localmente é necessário criar na pasta /api, dois arquivos .env
#### .env.development
#### .env.test
Para execução da api e dos testes unitários em bancos de dados diferentes. Os atributos necessário são
#### DB_CONNECTION_STRING e PORT
Especificando a conexão com o MongoDB Atlas e a porta onde executará a api.