
# Trybesmith

Sistema que cria uma loja virtual de itens medievais, no formato de uma API REST, utilizando Typescript.

## Tecnologias Utilizadas
- Docker
- Node.js
- Express.js
- MySQL
- Arquitetura MSC (Models, Services e Controllers)
- Middlewares de erro
- Lib `restify-errors` para tratamento de erros
- Typescript

## Rodando a aplicação

<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

### Com Docker

> **Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

1. Clone o repositório:

```bash
git clone git@github.com:hgo19/Trybesmith.git
```

2.  Inicie os containers através do comando:

```bash
docker-compose up -d
```

3.  Entre no container com node e instale as dependências:

```bash
docker exec -it trybesmith bash
```
Dentro do Container:
```bash
npm install
```
Para criar o banco de dados:
```bash
npm run createDB
```
Para iniciar a aplicação na porta 3000:
```bash
npm run dev
```

4.  A aplicação estará rodando na porta 3000, para acessála basta acessar o endereço: http://localhost:3000 e então utilizar os endpoints.

 <br />

### Sem Docker

1. Instale as dependências com:
```bash
npm install
```
2. Na aplicação tem um arquivo chamado `.env.example`, renomei para apenas `.env` e o configure para que consiga rodar localmente.

3. Para rodar localmente você precisa ter instalado o `Node.js` na sua máquina, em que, a versão deve ser `"node": ">=16.0.0"` e a versão do `"npm": ">=7.0.0"`.

4. Em seguida digite os seguintes comandos em seu terminal:

Para criar o banco de dados:
```bash
npm run createDB
```

Para iniciar a aplicação na porta 3000:
```bash
npm run dev
```

>**Script de criação de banco de dados e função que executa o mesmo escrito pela escola de ensino de desenvolvimento web Trybe.**

</details>

<br />
<br />

# Endpoints

<summary><strong>Na aplicação foram usados os seguintes endpoints: </strong></summary>
<br />

>**Todos os ENDPOINTS precisam de um `TOKEN` válido para ser realizada a requisição, esse Token é gerado a partir do Login**

### Login
- POST `/login` retornará um `TOKEN` em caso de login bem sucedido(usuário presente no banco de dados com a senha correta)

### Users
- POST `/users` endpoint para cadastro de usuário, retornará um `TOKEN` em caso de sucesso. Para cadastrar o usuário a requisição deve conter o seguinte body:
```json
{ 
  "username": "Zoro",
  "vocation": "swordsman",
  "level": 7,
  "password": "marimo13"
}
```

### Orders
- GET `/orders` retornará todos os pedidos já feitos na loja
- POST `/orders/` cadastra um novo pedido e retorna o pedido cadastrado, o pedido deve ter o seguinte body na sua requisição:
```json
  {
    "productsIds": [1, 2]
  }
```

### Products

- POST `/products` adicionará um novo produto ao banco de dados, a requisição deve ter seu body da seguinte maneira:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```
- GET `/products` retornará a listagem com todos os produtos disponíveis no banco de dados


Projeto desenvolvido por: [Hugo Leonardo](https://www.linkedin.com/in/hugo-leop/).