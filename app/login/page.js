'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Acá irá la lógica real de login
    alert(`Login con:\nCorreo: ${email}\nContraseña: ${password}`);
  };

  return (
    <main style={{ margin: 0, padding: 0 }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

        .container {
          height: 100vh;
          background-color: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.5rem;
          color: #ff007f;
          margin-bottom: 2rem;
          text-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          width: 100%;
          max-width: 320px;
        }

        input {
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-family: 'Orbitron', sans-serif;
          background-color: #111;
          color: #fff;
          border: 1px solid #ff007f33;
          outline: none;
        }

        input:focus {
          border-color: #ff007f;
          box-shadow: 0 0 8px #ff007f55;
        }

        button {
          background-color: #ff007f;
          color: #000;
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          box-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f;
        }

        .link {
          margin-top: 1.5rem;
          text-align: center;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.95rem;
          color: #aaa;
          text-decoration: none;
        }

        .link span {
          color: #ff007f;
          text-shadow: 0 0 5px #ff007f99;
          cursor: pointer;
          transition: color 0.3s;
        }

        .link span:hover {
          color: #fff;
        }
      `}</style>

      <div className="container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <a href="/register" className="link">
          ¿No tenés cuenta? <span>Crear una cuenta</span>
        </a>
      </div>
    </main>
  );
}

