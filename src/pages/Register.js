import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [dataBaseMock, setDataBaseMock] = useState([]);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  // instacio o navigate
  const navigate = useNavigate();

  // Adiciona um array para guardar os novos usuários simulando uma API.
  localStorage.setItem('newUsers', JSON.stringify(dataBaseMock));
  
  useEffect(() => {
    const validateInputs = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        console.log(email, password);
        if (!emailRegex.test(email) || !email) {
            setIsDisabled(true);
        } else if (!password || password.length < 6) {
            setIsDisabled(true);
        } else if (userName.length < 4) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }
    validateInputs();
  }, [email, password, userName]);

  const doRegister = (e) => {
      e.preventDefault();
      const object = {
          userName,
          email,
          password,
      }
      setDataBaseMock([...dataBaseMock, object]);
      localStorage.setItem('newUsers', JSON.stringify(dataBaseMock));

    // Criei esse TimeOut para simular a ação de adicionar no BD e também porque o navigate estava indo mais rápido que o setItem do localStorage
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="userName" class="form-label">Nome de usuário</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName-input"
            onChange={ (e) => setUserName(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" class="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email-input"
            onChange={ (e) => setEmail(e.target.value) }
          />
          <div className="form-text">Nós nunca compartilharemos o seu Email.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password-input"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <button
            type="submit"
            className="btn btn-success"
            disabled={ isDisabled }
            onClick={ (e) => doRegister(e) }
          >
            Registrar
        </button>
      </form>
    </div>
  );
}

export default Register;
