'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const fullText = 'PreviApp';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let current = fullText.length;

    const interval = setInterval(() => {
      if (current >= 0) {
        setDisplayedText(fullText.slice(current));
        current--;
      } else {
        clearInterval(interval);
      }
    }, 150); // velocidad de escritura

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ margin: 0, padding: 0 }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

        .container {
          background-color: #000;
          height: 100vh;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Poppins', sans-serif;
        }

        h1 {
          font-size: 3rem;
          color: #fff;
          letter-spacing: 0.1rem;
          text-align: center;
        }

        p {
          margin-top: 1rem;
          font-size: 1.1rem;
          color: #888;
          text-align: center;
        }
      `}</style>

      <div className="container">
        <h1>{displayedText}</h1>
        <p>Viví la experiencia</p>
      </div>
    </main>
  );
}

