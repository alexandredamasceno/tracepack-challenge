/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  // Busco os dados do BD mockado no localStorage;
  const usersFromDataBaseMocked = JSON.parse(localStorage.getItem('newUsers'));

  // Instacia o useNavigate(como consta na ducumentação)
  const navigate = useNavigate();

  useEffect(() => {
    const validateInputs = () => {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email) || !email) {
        setIsDisabled(true);
      } else if (!password || password.length < 6) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };
    validateInputs();
  }, [email, password]);

  const verifyUserExist = (e) => {
    e.preventDefault();
    usersFromDataBaseMocked.forEach((user) => {
      if (user.email === email && user.password === password) {
        navigate('/home');
      }
      return <div>Dados incorretos ou usuário não cadastrado</div>;
    });
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email-input"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={isDisabled}
          onClick={(e) => verifyUserExist(e)}
        >
          Entrar
        </button>
      </form>
      <br />
      <NavLink to="/register" className="btn btn-primary">
        Cadastrar
      </NavLink>
    </div>
  );
}

export default Login;
