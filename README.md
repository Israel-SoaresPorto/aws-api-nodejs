# Projeto AWS API Node

API base para laboratório de AWS desenvolvida com Node.js, Express e PostgreSQL.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **PostgreSQL (pg)** - Cliente PostgreSQL
- **dotenv** - Gerenciamento de variáveis de ambiente
- **nodemon** - Reinicialização automática em desenvolvimento

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- PostgreSQL (v12 ou superior)
- npm ou yarn

## ⚙️ Configuração

1. Clone o repositório

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`
   - Edite o arquivo `.env` com suas configurações:

```env
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=seu_banco_de_dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

4. Certifique-se de que o PostgreSQL está rodando e crie o banco de dados configurado

## 🏃‍♂️ Executando o projeto

### Modo de desenvolvimento (com auto-reload):
```bash
npm run dev
```

### Modo de produção:
```bash
npm start
```

## 📡 Endpoints

### GET /
Rota de teste da API
```json
{
  "message": "API funcionando!",
  "version": "1.0.0"
}
```

### GET /health
Health check da API e conexão com banco de dados
```json
{
  "status": "OK",
  "database": "Connected",
  "timestamp": "2026-03-04T..."
}
```

## 📁 Estrutura do Projeto

```
projeto-aws-api-node/
├── src/
│   ├── config/
│   │   └── database.js      # Configuração do PostgreSQL
│   ├── controllers/         # Controllers da aplicação
│   ├── routes/             # Rotas da API
│   └── index.js            # Arquivo principal
├── .env                    # Variáveis de ambiente (não commitar)
├── .env.example           # Exemplo de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo git
└── package.json          # Dependências e scripts
```

## Sobre alterações/modificações

O codigo já inclui controllers e rotas para usuários, mas é possível expandir para outras entidades como produtos, pedidos, etc. Basta criar novos controllers e rotas seguindo o mesmo padrão.

Também é possível adicionar middlewares para autenticação, validação de dados, tratamento de erros, ou até mesmo alterar a estrutura do projeto para algo mais modular, como usar uma arquitetura em camadas (services, repositories, etc).

Também é possível configurar o projeto para rodar com outros bancos de dados, como MySQL ou MongoDB, utilizando os respectivos clientes e adaptando a configuração do pool de conexões.

## 👨‍💻 Autor

Israel Soares Porto

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
