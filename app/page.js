'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const subtitleFull = 'Viví la experiencia';

  const [subtitleText, setSubtitleText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animación del subtítulo
    let current = 0;
    const interval = setInterval(() => {
      if (current <= subtitleFull.length) {
        setSubtitleText(subtitleFull.slice(0, current));
        current++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Fade-out + redirección después de 3.5s
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        router.replace('/login');
      }, 1200); // transición suave
    }, 3500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

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
          transition: opacity 1.2s ease-in-out;
          opacity: 1;
        }

        .container.fade-out {
          opacity: 0;
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
      `}</style>

      <div className={`container ${fadeOut ? 'fade-out' : ''}`}>
        <div className="lights" />
        <h1>PreviApp</h1>
        <p>{subtitleText}</p>
      </div>
    </main>
  );
}
