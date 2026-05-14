# 🧪 Prova Prática – Desenvolvedor Front-End

Widget flutuante desenvolvido com JavaScript + React + TypeScript, responsável por carregar uma aplicação React dentro de um iframe e consumir dados da API pública JSONPlaceholder.

## 🚀 Tecnologias utilizadas

JavaScript
React
TypeScript
Vite
Axios
Vitest
React Testing Library

## 📦 Estrutura do projeto

prova-frontend-3/
├── imgs/
├── react-app/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── tests/
│ │ ├── types/
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── package.json
│ └── vite.config.ts
│
├── sites-exemplo/
│ ├── Site01/
│ ├── Site02/
│ └── Site03/
│
├── widget.js
└── README.md

⚙️ Como executar o projeto

1. Clonar o repositório
   git clone <url-do-repositorio>

2. Instalar dependências da aplicação React
   cd react-app
   npm install

3. Executar a aplicação React
   npm run dev
   A aplicação ficará disponível em: http://localhost:5173

🌐 Como testar o widget nos sites de exemplo

O arquivo widget.js é responsável por:

criar o botão flutuante
abrir/fechar o widget
criar o iframe
enviar o loggedUserId
realizar comunicação via postMessage

1. Voltar para a raiz do projeto
   Em outro terminal:
   cd prova-frontend-3

2. Subir um servidor simples para os HTMLs
   npx serve .
   obs. Instalar o pacote serve (caso não possua)
   npm install -g serve

3. Abrir um dos sites exemplo
   http://localhost:3000/sites-exemplo/Site02/index.html

👤 Usuário logado
Os sites de exemplo definem:

<script>
  window.loggedUserId = 2;
</script>

O widget.js envia esse valor para a aplicação React via postMessage.

🔄 Fluxo da aplicação

Página HTML
↓
widget.js
↓
iframe
↓
Aplicação React
↓
API JSONPlaceholder

📡 APIs utilizadas
Usuário
https://jsonplaceholder.typicode.com/users/<ID>

Posts
https://jsonplaceholder.typicode.com/posts?userId=<ID>

🧪 Testes
O projeto possui:

testes unitários
testes integrados

Utilizando:

Vitest
React Testing Library

Executar testes:
Dentro de react-app:
npm run test

📱 Responsividade

O widget respeita os limites definidos:

largura máxima: 320px
altura máxima: 600px

Compatível com:

desktop
mobile

🧠 Arquitetura

A aplicação foi dividida em:

components
services
types
tests

Com separação de responsabilidades e reutilização de componentes.

👨‍💻 Autor

Murilo Zanin de Sousa
