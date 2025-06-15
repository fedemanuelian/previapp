'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const subtitleFull = 'Viví la experiencia';
  const [subtitleText, setSubtitleText] = useState('');
  const router = useRouter();

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current <= subtitleFull.length) {
        setSubtitleText(subtitleFull.slice(0, current));
        current++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    router.push('/login');
  };

  return (
    <main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

        .container {
          background: radial-gradient(circle at center, #0d0d0d, #000000);
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .lights {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, #ff007f22 0%, transparent 40%),
                      radial-gradient(circle, #ff007f11 0%, transparent 60%);
          animation: pulse 6s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.05); opacity: 1; }
        }

        h1 {
          font-size: 3.2rem;
          color: #fff;
          text-shadow: 0 0 10px #ff007f66;
          letter-spacing: 0.1rem;
          margin: 0;
          z-index: 1;
        }

        p {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: #ccc;
          z-index: 1;
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
          z-index: 1;
        }

        .button:hover {
          background-color: #ff007f;
          color: #000;
          box-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f;
        }
      `}</style>

      <div className="container">
        <div className="lights" />
        <h1>PreviApp</h1>
        <p>{subtitleText}</p>
        <button className="button" onClick={handleStart}>
          Comenzar
        </button>
      </div>
    </main>
  );
}

