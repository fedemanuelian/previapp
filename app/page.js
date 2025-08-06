'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        router.replace('/login');
      }, 1200);
    }, 3500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

        .container {
          background: linear-gradient(160deg, #0a0a0a, #1a1a1a);
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

        .animated-bg {
          position: absolute;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            45deg,
            rgba(255, 0, 128, 0.05) 0,
            rgba(255, 0, 128, 0.05) 1px,
            transparent 1px,
            transparent 20px
          );
          animation: slide 10s linear infinite;
          z-index: 0;
        }

        @keyframes slide {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-100px) translateY(-100px); }
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

        @keyframes neonFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className={`container ${fadeOut ? 'fade-out' : ''}`}>
        <div className="animated-bg" />
        <h1>PreviApp</h1>
      </div>
    </main>
  );
}
