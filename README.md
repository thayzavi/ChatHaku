
# 🐉  Chat com Haku

Haku é um assistente virtual desenvolvido com React Native, que utiliza modelos de linguagem avançados (LLMs - Large Language Models). Neste projeto, Haku foi criado com foco em oferecer respostas empáticas, emocionalmente equilibradas e voltadas para a saúde mental.
Seu principal objetivo é apoiar pessoas que estão enfrentando momentos de ansiedade, estresse, tristeza, insegurança ou baixa autoestima, promovendo acolhimento e bem-estar por meio de uma interação sensível e humanizada.

## 📁 Estrutura do Projeto

```
chat-haku/
├── backend/         # Backend com Node.js + Express
│   ├── server.js
│   ├── .env  -- com sua chava (OPENROUTER_API_KEY=)
│   └── package.json
├── mobile/          # Frontend mobile com React Native
│   ├── App.js
│   ├── Screens/
│   └── package.json
└── README.md
```

## 🚀 Funcionalidades

- Envio e recebimento de mensagens com o personagem Haku
- Interface moderna e responsiva com imagem de fundo
- Tratamento de erros e loading (`ActivityIndicator`)
- Teclado ajustável para evitar sobreposição no input

## 🔧 Tecnologias

### 📱 Mobile (React Native)

- React Native
- React Native Paper
- React Navigation
- Axios

### 🛠️ Backend (Node.js)

- Node.js
- Express
- Cors
- Dotenv

## 🖥️ Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/thayzavi/ChatHaku.git
cd chat-haku
```

### 2. Instale as dependências

#### Backend
```bash
cd backend
npm install
node server.js
```

#### Mobile
```bash
cd ../mobile
npm install
npx expo start
```

## ⚠️ Importante: conexão mobile ↔ backend

Para que o app se comunique corretamente com o servidor local:

- Substitua `localhost` pelo IP da sua máquina na chamada da API:

```js
// Exemplo (no mobile/App.js)
axios.post('http://000.008.0.000:3000/chat') // troque pelo seu IP local
```

Você pode encontrar o IP local com:

```bash
ipconfig # Windows
ifconfig # Mac/Linux
```

## 🖼️ Imagem de fundo

A imagem de fundo usada no chat está localizada em:

```
mobile/assets/fundo.jpg
```

## 📲 Preview

![Design sem nome (1)](https://github.com/user-attachments/assets/086e44dd-eeaa-4e71-a4aa-24ce77620422)


## 📄 Licença

Este projeto está sob a licença MIT.  
Sinta-se livre para contribuir, estudar ou adaptar para seus projetos pessoais!

## ✨ Autor

Desenvolvido com 💙 por Thayza Silva (https://github.com/thayzavi)
