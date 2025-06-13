'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    router.push('/login');
  };

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
          padding: 0 2rem;
        }

        h1 {
          font-size: 3rem;
          color: #ff007f;
          text-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 1s ease;
          text-align: center;
        }

        p {
          font-size: 1.2rem;
          color: #ccc;
          margin-top: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
          text-align: center;
        }

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
        }

        .button:hover {
          background-color: #ff007f;
          color: #000;
          box-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f;
        }

        .visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container">
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



