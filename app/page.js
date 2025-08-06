'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const subtitleFull = 'Viví la experiencia';

  const [subtitleText, setSubtitleText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

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

    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        router.replace('/login');
      }, 1200);
    }, 3500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

        .container {
          background: linear-gradient(145deg, #000000, #0d0d0d);
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Orbitron', sans-serif;
          position: relative;
          overflow: hidden;
          transition: opacity 1.2s ease-in-out;
          opacity: 1;
        }

        .container.fade-out {
          opacity: 0;
        }

        .lights::before,
        .lights::after {
          content: '';
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle, #ff007f33 0%, transparent 60%),
                      radial-gradient(circle, #00ffff22 0%, transparent 70%);
          animation: moveLights 8s linear infinite;
          z-index: 0;
          mix-blend-mode: screen;
        }

        .lights::after {
          animation-direction: reverse;
          transform: rotate(45deg);
        }

        @keyframes moveLights {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1.05); }
        }

        h1 {
          font-size: 4rem;
          color: #ff007f;
          text-shadow: 0 0 20px #ff007f88;
          letter-spacing: 0.2rem;
          margin: 0;
          z-index: 1;
          animation: neonFade 2s ease-out forwards;
        }

        p {
          margin-top: 1.2rem;
          font-size: 1.5rem;
          color: #ffffffcc;
          z-index: 1;
          animation: neonFade 2s ease-out forwards;
        }

        @keyframes neonFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
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

