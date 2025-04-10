// utils/faqData.js

// Estrutura organizada por temas
export const faqTemas = {
  funcionamento: [
    {
      pergunta: "por que o ar liga mas não gela?",
      resposta: "Verifique se o modo está em 'frio' (cool) e se o gás refrigerante está com nível adequado."
    },
    {
      pergunta: "qual a temperatura ideal para o ar-condicionado?",
      resposta: "Recomenda-se entre 23°C e 25°C para conforto e economia."
    }
  ],
  manutencao: [
    {
      pergunta: "quanto tempo dura o gás do ar-condicionado?",
      resposta: "Normalmente entre 1 a 3 anos, dependendo do uso e manutenção."
    }
  ],
  erros: [
    {
      pergunta: "o que significa o erro E1 no ar-condicionado?",
      resposta: "Erro E1 geralmente indica problema no sensor de temperatura."
    }
  ]
};

// Geração do formato plano { pergunta: resposta }
export const perguntasRespostas = Object.values(faqTemas)
  .flat()
  .reduce((acc, item) => {
    acc[item.pergunta.toLowerCase()] = item.resposta;
    return acc;
  }, {});
