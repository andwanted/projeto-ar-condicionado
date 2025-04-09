import React, { useState } from 'react';
import './CalculadoraFormulario.css';

function CalculadoraFormulario() {
  const [valorPressao, setValorPressao] = useState('');
  const [valorTempEvaporacao, setValorTempEvaporacao] = useState('');
  const [valorTempRetorno, setValorTempRetorno] = useState('');
  const [valorTempInfulsao, setValorTempInfulsao] = useState('');
  const [valorDeltaT, setValorDeltaT] = useState('');
  const [valorCorrente, setValorCorrente] = useState('');
  const [valorTempTuboSuccao, setValorTempTuboSuccao] = useState('');
  const [valorSuperA, setValorSuperA] = useState('');

  // Estados para mensagens de erro e ícones
  const [pressaoMsg, setPressaoMsg] = useState('');
  const [tempEvapMsg, setTempEvapMsg] = useState('');
  const [deltaTMsg, setDeltaTMsg] = useState('');
  const [correnteMsg, setCorrenteMsg] = useState('');
  const [superAMsg, setSuperAMsg] = useState('');

  const calcular = () => {
    // Validação da Pressão
    if (valorPressao < 60 || valorPressao > 75) {
      setPressaoMsg(`Valor fora do intervalo (60-75) ❌ (Distância: ${Math.min(Math.abs(valorPressao - 60), Math.abs(valorPressao - 75))})`);
    } else {
      setPressaoMsg('Valor válido ✅');
    }

    // Validação da Temperatura de Evaporação
    if (valorTempEvaporacao < 1 || valorTempEvaporacao > 6) {
      setTempEvapMsg(`Valor fora do intervalo (1-6) ❌ (Distância: ${Math.min(Math.abs(valorTempEvaporacao - 1), Math.abs(valorTempEvaporacao - 6))})`);
    } else {
      setTempEvapMsg('Valor válido ✅');
    }

    // Calculo e Validação do Delta T
    const deltaTCalculado = Number(valorTempRetorno) - Number(valorTempInfulsao);
    setValorDeltaT(deltaTCalculado);
    if (deltaTCalculado < 10 || deltaTCalculado > 15) {
      setDeltaTMsg(`Valor fora do intervalo (10-15) ❌ (Distância: ${Math.min(Math.abs(deltaTCalculado - 10), Math.abs(deltaTCalculado - 15))})`);
    } else {
      setDeltaTMsg('Valor válido ✅');
    }

    // Validação da Corrente
    if (Number(valorCorrente) > 3.4) {
      setCorrenteMsg('Valor acima do limite (3,4) ❌');
    } else {
      setCorrenteMsg('Valor válido ✅');
    }

    // Calculo e Validação do Super A
    const superACalculado = Number(valorTempTuboSuccao) - Number(valorTempEvaporacao);
    setValorSuperA(superACalculado);
    if (superACalculado < 2 || superACalculado > 12) {
      setSuperAMsg(`Valor fora do intervalo (2-12) ❌ (Distância: ${Math.min(Math.abs(superACalculado - 2), Math.abs(superACalculado - 12))})`);
    } else {
      setSuperAMsg('Valor válido ✅');
    }
  };

  return (
    <div className="calculadora-container">
      <h2>Validação de Pressão</h2>
      <div className="input-group">
        <label>Pressão PSI:</label>
        <input
          type="number"
          value={valorPressao}
          onChange={(e) => setValorPressao(e.target.value)}
          placeholder="(60-75) "
        />
        <p className={`mensagem-validacao ${pressaoMsg.includes('válido') ? 'sucesso' : ''}`}>{pressaoMsg}</p>
      </div>
      <div className="input-group">
        <label>Temperatura de Evaporação: </label>
        <input
          type="number"
          value={valorTempEvaporacao}
          onChange={(e) => setValorTempEvaporacao(e.target.value)}
          placeholder="(1~6)"
        />
        <p className={`mensagem-validacao ${tempEvapMsg.includes('válido') ? 'sucesso' : ''}`}>{tempEvapMsg}</p>
      </div>
      <div className="input-group">
        <label>Delta T Evaporador = Temperadora de retorno - Temperatura de Influsão: </label>
        <input
          type="number"
          value={valorTempRetorno}
          onChange={(e) => setValorTempRetorno(e.target.value)}
          placeholder="Temperatura de retorno"
        />
        <input
          type="number"
          value={valorTempInfulsao}
          onChange={(e) => setValorTempInfulsao(e.target.value)}
          placeholder="Temperatura de influsão"
        />
        <input
          type="number"
          value={valorDeltaT}
          readOnly
          placeholder="Resultado Delta T"
        />
        <p className={`mensagem-validacao ${deltaTMsg.includes('válido') ? 'sucesso' : ''}`}>{deltaTMsg}</p>
      </div>
      <div className="input-group">
        <label>Corrente: </label>
        <input
          type="number"
          value={valorCorrente}
          onChange={(e) => setValorCorrente(e.target.value)}
          placeholder="3,4"
        />
        <p className={`mensagem-validacao ${correnteMsg.includes('válido') ? 'sucesso' : ''}`}>{correnteMsg}</p>
      </div>
      <div className="input-group">
        <label>Super A = temperatura tubo linha de succão - temperatura de evaporação:</label>
        <input
          type="number"
          value={valorTempTuboSuccao}
          onChange={(e) => setValorTempTuboSuccao(e.target.value)}
          placeholder="Temperatura tubo succão"
        />
        <input
          type="number"
          value={valorTempEvaporacao}
          readOnly
          placeholder="Temperatura evaporação"
        />
        <input
          type="number"
          value={valorSuperA}
          readOnly
          placeholder="Resultado Super A"
        />
        <p className={`mensagem-validacao ${superAMsg.includes('válido') ? 'sucesso' : ''}`}>{superAMsg}</p>
      </div>

      <button onClick={calcular}>Calcular</button>
    </div>
  );
}

export default CalculadoraFormulario;