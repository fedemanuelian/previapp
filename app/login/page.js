'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tasty-turtles-double.loca.lt/api/login', {
        email,
        password
      });

      console.log('Respuesta del backend:', response.data);
      alert('Inicio de sesión exitoso');
      // Podés redirigir al home o guardar token acá si lo implementás más adelante
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');

        .container {
          height: 100vh;
          background-color: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          font-family: 'DM Sans', sans-serif;
        }

        h1 {
          font-size: 2.5rem;
          color: #ff007f;
          margin-bottom: 2rem;
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
          background-color: #111;
          color: #fff;
          border: 1px solid #ff007f33;
        }

        input:focus {
          border-color: #ff007f;
          box-shadow: 0 0 8px #ff007f55;
          outline: none;
        }

        button {
          background-color: #ff007f;
          color: #000;
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
          font-size: 0.95rem;
          color: #aaa;
        }

        .link span {
          color: #ff007f;
          cursor: pointer;
        }

        .link span:hover {
          color: #fff;
        }
      `}</style>

      <div className="container">
        <h1>Iniciar sesión</h1>
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

      


