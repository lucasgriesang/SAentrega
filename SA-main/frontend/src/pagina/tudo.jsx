import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../tudo.css';

const Tudo = () => {
  const [pagina, setPagina] = useState('sobre');
  const [cep, setCep] = useState('');
  const [tipoLixo, setTipoLixo] = useState('');
  const [dataMes, setDataMes] = useState('');
  const [clientes, setClientes] = useState([]);

  const handleCepChange = (e) => setCep(e.target.value);
  const handleTipoLixoChange = (e) => setTipoLixo(e.target.value);
  const handleDataMesChange = (e) => setDataMes(e.target.value);

  const handleSubmit = () => {
    const novoCliente = { cep, tipoLixo, dataMes };
    setClientes([...clientes, novoCliente]);
    setCep('');
    setTipoLixo('');
    setDataMes('');
    window.alert('Seus dados foram salvos');
  };

  const renderizarPagina = () => {
    switch (pagina) {
      case 'sobre':
        return (
          <div>
            <div className="auth-container2">
              <h1>Cadastro Lixo</h1>
              <div className="container">
                <div className="input-group">
                  <label htmlFor="cep">CEP:</label>
                  <input
                    type="text"
                    id="cep"
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="Digite o CEP"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="tipo-lixo">Tipo de Lixo:</label>
                  <select
                    id="tipo-lixo"
                    value={tipoLixo}
                    onChange={handleTipoLixoChange}
                    className='select'
                  >
                    <option value="">Selecione o tipo de lixo</option>
                    <option value="Celular">Celular</option>
                    <option value="Computador">Computador</option>
                    <option value="Eletrodoméstico">Eletrodoméstico</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="data-mes">Data/Mês:</label>
                  <input
                    type="date"
                    id="data-mes"
                    value={dataMes}
                    onChange={handleDataMesChange}
                    placeholder="Digite a data/mês"
                  />
                </div>
                <button className='but' onClick={handleSubmit}>Confirma</button>
                <img src={logo} alt="logo" style={{ width: '200px' }} />
              </div>
              <div className="tabela-clientes">
                <h2>Seus Cadastrados:</h2>
                <table>
                  <thead>
                    <tr>
                      <th>CEP</th>
                      <th>Tipo de Lixo</th>
                      <th>Data/Mês</th>
                    </tr><br /><br />
                  </thead>
                  <tbody>
                    {clientes.map((cliente, index) => (
                      <tr key={index}>
                        <td>{cliente.cep}</td>
                        <td>{cliente.tipoLixo}</td>
                        <td>{cliente.dataMes}</td>
                      </tr>
                    ))}
                  </tbody><br />
                </table>
              </div>
            </div>
          </div>
        );
        case 'comoFunciona':
          return (
            <div>
              <div className="auth-container2">
                <h1>Como Funciona  </h1>
                <div className='contato'>
          
              
          
                <img src={logo} alt="logo" style={{width: '300px',width: '25em', border: '300px',}} />     
              <h1>Quem Somos:</h1><br />
              <h2>A “nome da empresa” é uma empresa com o objetivo de descartar corretamente resíduos eletrônicos.</h2><br />
              <h1>Nossos Serviços:</h1><br />
              <h2>Através do nosso aplicativo, usuários registram o tipo de lixo a ser descartado e o CEP, e os resíduos são descartados.</h2><br />
              <h1>Que tipo de resíduos são descartados:</h1><br />
              <h2>Desde equipamentos de escritório até eletrodomésticos e dispositivos pessoais.</h2><br />
          </div>
              </div>
            </div>
  
          );
        case 'contato':
          return (
            <div>
              <div className="auth-container2">
                
                <div className='quem'>
              <h1 className='contatoh1'>Caso queira contato </h1><br />
              <h2>Telefone: 48 9999-9999</h2><br />
              <h2>Email: carlos@gmail.com</h2>
              <h2>Linkedin: linkedin100%real </h2>
              <img src={logo} alt="logo" style={{width: '300px',width: '25em',}} />      
          </div>
              </div>
            </div>
          );
        default:
          return (
            <div>
  
            </div>
          );
      }
    };
  
    return (
      <div className='tudo' >
      <h3 className='tamanho'></h3>
        <nav>
          <button className='butcase' onClick={() => setPagina('sobre')}>Cadastro lixo</button>
          <button className='butcase' onClick={() => setPagina('comoFunciona')}>Como Funciona</button>
          <button className='butcase' onClick={() => setPagina('contato')}>Contato</button><br />
        </nav>
        {renderizarPagina()}
       
            </div>
  
  );
  };
  
  export default Tudo;