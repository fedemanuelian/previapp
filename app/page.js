'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ margin: 0, padding: 0 }}>
      <style jsx>{`
        .container {
          background-color: #000;
          color: #fff;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        h1 {
          font-size: 3rem;
          text-align: center;
          color: #ff007f;
          text-shadow: 0 0 5px #ff007f, 0 0 10px #ff007f, 0 0 20px #ff007f;
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1s ease;
        }

        p {
          font-size: 1.2rem;
          color: #bbb;
          margin-top: 10px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease 0.3s;
        }

        .button {
          margin-top: 2rem;
          padding: 1rem 2rem;
          background-color: transparent;
          border: 2px solid #ff007f;
          color: #ff007f;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .button:hover {
          background-color: #ff007f;
          color: black;
          box-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 40px #ff007f;
        }

        .visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container">
        <h1 className={show ? 'visible' : ''}>La noche empieza en PreviApp</h1>
        <p className={show ? 'visible' : ''}>Encontrá tu previa, conectá con otros grupos y viví la experiencia.</p>
        <button className="button">Explorar boliches</button>
      </div>
    </main>
  );
}


