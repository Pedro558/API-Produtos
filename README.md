# 🧩 API-PRODUTOS

API REST desenvolvida em **Node.js + TypeScript** com arquitetura **MVC (Model–View–Controller)**, utilizando **Prisma ORM** para persistência de dados e **Swagger** para documentação.

---

## 🧾 Tecnologias utilizadas

- Node.js + TypeScript
- Express
- Prisma ORM
- Swagger (OpenAPI)
- REST Client (VSCode

---

## 🏗️ Padrão arquitetural

A aplicação segue o padrão MVC + Service + Repository, garantindo:
- Separação clara de responsabilidades.
- Facilidade de manutenção e testes.
- Extensibilidade para novos domínios (ex.: Produtos, Pedidos, etc.).

---

## 🔄 Fluxo de execução:
1. O cliente faz uma requisição HTTP.
2. O **Controller** recebe e valida a requisição.
3. O **Service** executa a lógica de negócio.
4. O **Prisma Client** acessa o banco de dados (Model/Repository).
5. A resposta é enviada ao cliente em formato JSON (View).

---

## 🚀 Como Executar o Projeto

1. Instalar dependências:
   ```
   npm install
   ```

2. Configurar o arquivo ```.env```:
   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
   ```

3. Executar migrações e (opcionalmente) o seed:
   ```
   npx prisma migrate dev
   npx prisma db seed
   ```

4. Rodar o servidor:
   ```
    npm run dev
   ```

5. Acessar a documentação no Swagger:
   ```
    http://localhost:3000/api-docs
   ```

---

## 🦸‍♂️ Autor
Desenvolvido como parte do Desafio Final — Pós-Graduação em Arquitetura de Software.

   
