import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../fundog.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
  
    if (password === confirmPassword) {
      navigate('../pagina/Tudo', { replace: true });
    } else {
      alert('A senha não são iguais  ');
    }
    console.log('Signup', { email, password });
  };

  return (
    <div className="auth-container">
      <div class="teste">
        <h1 className='titulos'> Cadastro </h1><br />

        <form onSubmit={handleSignup}>
          <label >
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
          </label>
          <label>
            Confirmar Senha:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Digite a senha"
            />

          </label>
          <button type="submit">Cadastrar</button><br />
          <img src={logo} alt="logo" style={{ width: '300px', height: '200px' }} />     

          <p>
          já possue uma conta? <a href="/" >logue-se</a>
        </p>
       
        </form>
      </div>
    </div>
  );
};

export default Signup;