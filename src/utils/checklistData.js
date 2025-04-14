// src/utils/checklistData.js

export const checklists = {
  novo: [
    {
      id: 1,
      titulo: 'Escolher o local de instalação',
      descricao: 'O local deve ter boa circulação de ar, evitar luz solar direta e ser próximo da unidade externa.',
      imagem: '/imagens/local-instalacao.jpg'
    },
    {
      id: 2,
      titulo: 'Fixar o suporte da evaporadora',
      descricao: 'Use nível e trena para fixar corretamente a base da evaporadora na parede.',
      imagem: '/imagens/suporte-evaporadora.jpg'
    },
    {
      id: 3,
      titulo: 'Fazer o furo na parede para os tubos',
      descricao: 'Perfure a parede com leve inclinação para fora, para facilitar a drenagem.',
      imagem: '/imagens/furo-parede.jpg'
    }
  ],

  reinstalar: [
    {
      id: 1,
      titulo: 'Verificar condições do equipamento antigo',
      descricao: 'Checar se há vazamentos, danos em mangueiras ou cabos e testar o funcionamento.',
      imagem: '/imagens/verificacao-equipamento.jpg'
    },
    {
      id: 2,
      titulo: 'Avaliar novo local de instalação',
      descricao: 'O novo local deve seguir as mesmas regras do modelo novo: sem sol direto, bom fluxo de ar.',
      imagem: '/imagens/novo-local.jpg'
    },
    {
      id: 3,
      titulo: 'Reinstalar suporte e conexão dos tubos',
      descricao: 'Certifique-se de que as conexões estão bem vedadas e não há dobras nos tubos.',
      imagem: '/imagens/conexao-tubos.jpg'
    }
  ],

  retirarEInstalar: [
    {
      id: 1,
      titulo: 'Desligar e recolher o gás do equipamento',
      descricao: 'Use uma chave de serviço para recolher o gás antes de desconectar o sistema.',
      imagem: '/imagens/recolher-gas.jpg'
    },
    {
      id: 2,
      titulo: 'Remover evaporadora e condensadora',
      descricao: 'Retire com cuidado para não danificar tubulações ou conexões.',
      imagem: '/imagens/remocao-equipamento.jpg'
    },
    {
      id: 3,
      titulo: 'Instalar novamente seguindo os passos da reinstalação',
      descricao: 'Após remoção, siga os mesmos passos do cenário de reinstalação.',
      imagem: '/imagens/reinstalacao.jpg'
    }
  ]
};
