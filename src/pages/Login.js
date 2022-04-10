import React, { useState, useEffect } from 'react';
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  
  useEffect(() => {
    const validateInputs = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        console.log(email, password);
        if (!emailRegex.test(email) || !email) {
            setIsDisabled(true);
        } else if (!password || password.length < 6) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }
    validateInputs();
  }, [email, password]);

  return (
    <div className="container">
      <form>
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
          >
            Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
