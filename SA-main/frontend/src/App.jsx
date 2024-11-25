import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Tudo from './pagina/tudo';
import Teste from './teste/teste';
import Adm from './pagina/adm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pagina/Tudo" element={<Tudo />} />
          <Route path="/teste/teste" element={<Teste />} />
          <Route path="/pagina/adm" element={<Adm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
