
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';
import '../fundog.css'

import logo from '../images/logo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate ('./pagina/Tudo');
    console.log('Login', { email, password });
  };

  return (
    
    <div className="auth-container">
    <div class="teste">
      <h2 className='titulos' >Login</h2>
      <h2>______________________________________</h2>
      
      <form onSubmit={handleLogin}>
        <label>
          E-mail:
          <input
            type="email"
            value={email}

            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite o email"

          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite a senha"
          />

                  <button type="submit" onClick={handleLogin} >Entrar</button><br />

          <img src={logo} alt="logo" style={{width: '300px',width: '200px',}} />   
        </label>
        <p>
          Não tem uma conta? <a href="/signup" >Cadastre-se</a>

        </p>
     
      </form>
    </div>
    </div>
  );
};

export default Login;
