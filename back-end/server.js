import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const modelId = 'deepseek/deepseek-chat'; 

app.post('/chat', async (req, res) => {
  const { mensagem } = req.body;

  try {
    const prompt = `
    Você é Haku, o espírito do rio.
    Fale com serenidade, empatia e sabedoria oriental. Responda com foco em saúde mental, escuta e equilíbrio emocional.
    Responda a seguinte mensagem do usuário de forma breve e acolhedora:

    "${mensagem}"
        `;

    // Realizando a requisição para o modelo de IA
    const resposta = await axios.post(
        `https://openrouter.ai/api/v1/chat/completions`,
        {
        model: modelId,
        messages: [
        {
            role: 'user',
            content: prompt,
        },
            ],
            max_tokens: 1000,
            temperature: 0.7,
        },
        {
            headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            },
        }
    );

     // Obter a resposta do modelo
    const respostaTexto =resposta.data?.choices?.[0]?.message?.content || 'Desculpe, não consegui compreender sua mensagem. Você pode reformular?';

    // Retornar a resposta
    res.json({ resposta: respostaTexto });
  } catch (erro) {
    console.error(erro.response?.data || erro.message);
    res.status(500).json({ erro: "Erro ao consultar o modelo. Tente novamente mais tarde." });
  }
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});