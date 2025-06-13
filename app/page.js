'use client'; // Habilita el uso de hooks del lado del cliente

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redirigir al login

export default function Home() {
  const [visible, setVisible] = useState(false); // Controla si se muestra el contenido animado
  const router = useRouter(); // Objeto para redirigir a otra ruta

  useEffect(() => {
    // Espera 100ms antes de mostrar el contenido para animar entrada
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Función al apretar el botón "Comenzar"
  const handleStart = () => {
    router.push('/login'); // Redirige a /login
  };

  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* CSS embebido con animaciones y estilo visual */}
      <style jsx>{`
        /* Importa fuente Orbitron desde Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

        /* Contenedor principal */
        .container {
          background-color: #000;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          padding: 0 2rem;
          position: relative;
        }

        /* Fondo animado con un gradiente pulsante */
        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, #ff007f22 0%, #000000 80%);
          animation: pulseBackground 6s infinite alternate;
          z-index: 0;
        }

        /* Animación de pulso suave */
        @keyframes pulseBackground {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        /* Título principal */
        h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          color: #ff007f;
          text-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 1s ease;
          text-align: center;
          z-index: 1;
        }

        /* Subtítulo */
        p {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          color: #ccc;
          margin-top: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
          text-align: center;
          z-index: 1;
        }

        /* Botón de Comenzar */
        .button {
          margin-top: 2.5rem;
          padding: 0.8rem 2rem;
          background-color: transparent;
          border: 2px solid #ff007f;
          color: #ff007f;
          font-size: 1rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
          z-index: 1;
          font-family: 'Orbitron', sans-serif;
        }

        /* Hover del botón: resplandor neón */
        .button:hover {
          background-color: #ff007f;
          color: #000;
          box-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f;
        }

        /* Clase para hacer aparecer el contenido suavemente */
        .visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Contenido visual de la pantalla */}
      <div className="container">
        <div className="background"></div> {/* Fondo animado */}
        <h1 className={visible ? 'visible' : ''}>Bienvenido a PreviApp</h1>
        <p className={visible ? 'visible' : ''}>
          Encontrá tu previa, conectá y viví la experiencia.
        </p>
        <button className="button" onClick={handleStart}>
          Comenzar
        </button>
      </div>
    </main>
  );
}



