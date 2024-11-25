import React, { useState } from 'react';

const Adm = () => {
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarRegistros, setMostrarRegistros] = useState(false);
  const [registrosLixo, setRegistrosLixo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMostrarUsuarios = () => {
    setMostrarUsuarios(!mostrarUsuarios);
  };

  const toggleMostrarRegistros = () => {
    setMostrarRegistros(!mostrarRegistros);
  };

  return (
    <div className="container2">
      <h1>Tela de Administração</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit" >Enviar</button>
      </form>

      <button onClick={toggleMostrarUsuarios} className='but'>Ver Todos os Usuários</button>
      <button onClick={toggleMostrarRegistros}className='but'>Ver Registros de Lixo</button>

      {mostrarUsuarios && (
        <div>
          <h2>Usuários Cadastrados</h2>
          <table>
            <thead>
              <tr>
                <th className='button23'>Email</th>
                <th>Senha</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.email}</td>
                  <td>{usuario.senha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {mostrarRegistros && (
        <div>
          <h2>Registros de Lixo Enviados</h2>
          <table>
            <thead>
              <tr>
                <th>Tipo de Lixo</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {registrosLixo.map((registro, index) => (
                <tr key={index}>
                  <td>{registro.tipoLixo}</td>
                  <td>{registro.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Adm;
