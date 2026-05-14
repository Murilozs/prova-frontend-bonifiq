# 🧪 Prova Prática – Desenvolvedor Front-End

Widget flutuante desenvolvido com JavaScript + React + TypeScript, responsável por carregar uma aplicação React dentro de um iframe e consumir dados da API pública JSONPlaceholder.

---

# 🚀 Tecnologias utilizadas

- JavaScript
- React
- TypeScript
- Vite
- Axios
- Vitest
- React Testing Library

---

# 📦 Estrutura do projeto

```txt
prova-frontend-3/
├── imgs/
├── react-app/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── tests/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── sites-exemplo/
│   ├── Site01/
│   ├── Site02/
│   └── Site03/
│
├── widget.js
└── README.md
```

---

# ⚙️ Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/Murilozs/prova-frontend-bonifiq.git
```

---

## 2. Instalar dependências da aplicação React

```bash
cd react-app
npm install
```

---

## 3. Executar a aplicação React

```bash
npm run dev
```

A aplicação ficará disponível em:

```txt
http://localhost:5173
```

---

# 🌐 Como testar o widget nos sites de exemplo

O arquivo `widget.js` é responsável por:

- Criar o botão flutuante
- Abrir/fechar o widget
- Criar o iframe
- Enviar o `loggedUserId`
- Realizar comunicação via `postMessage`

---

## 1. Voltar para a raiz do projeto

Em outro terminal:

```bash
cd ..
```

---

## 2. Instalar o pacote `serve` (caso não possua)

```bash
npm install -g serve
```

---

## 3. Subir um servidor local para os HTMLs

Na raiz do projeto:

```bash
npx serve .
```

---

## 4. Abrir um dos sites exemplo

Exemplo:

```txt
http://localhost:3000/sites-exemplo/Site02/index.html
```

---

# 👤 Usuário logado

Os sites de exemplo definem:

```html
<script>
  window.loggedUserId = 2;
</script>
```

O `widget.js` envia esse valor para a aplicação React via `postMessage`.

---

# 🔄 Fluxo da aplicação

```txt
Página HTML
   ↓
widget.js
   ↓
iframe
   ↓
Aplicação React
   ↓
API JSONPlaceholder
```

---

# 📡 APIs utilizadas

## Usuário

```txt
https://jsonplaceholder.typicode.com/users/<ID>
```

## Posts

```txt
https://jsonplaceholder.typicode.com/posts?userId=<ID>
```

---

# 🧪 Testes

O projeto possui:

- Testes unitários
- Testes integrados

Utilizando:

- Vitest
- React Testing Library

---

## Executar testes

Dentro de `react-app`:

```bash
npm run test
```

---

## Executar testes com coverage

```bash
npm run test:coverage
```

---

# ✅ Funcionalidades implementadas

- Botão flutuante fixo
- Abertura e fechamento do widget
- Comunicação entre página e iframe via `postMessage`
- Consumo de API
- Loading
- Tratamento de erro
- Responsividade desktop/mobile
- Organização em componentes
- Testes unitários
- Testes integrados
- Animações de abertura/fechamento

---

# 📱 Responsividade

O widget respeita os limites definidos:

- Largura máxima: `320px`
- Altura máxima: `600px`

Compatível com:

- Desktop
- Mobile

---

# 🧠 Arquitetura

A aplicação foi dividida em:

- `components`
- `services`
- `types`
- `tests`

Com separação de responsabilidades e reutilização de componentes.

---

# 📌 Observações

O projeto foi desenvolvido para funcionar corretamente em ambientes cross-domain utilizando comunicação via `postMessage`.

---

# 👨‍💻 Autor

Murilo Zanin de Sousa
