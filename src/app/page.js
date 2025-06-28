"use client";
import { useState } from "react";

export default function Home() {
  const [noBtnPos, setNoBtnPos] = useState({ top: "80%", left: "50%" });
  const [answered, setAnswered] = useState(false);
  const [showReally, setShowReally] = useState(false);

  // Move "No" button to a random position on the whole screen
  const moveNoButton = () => {
    const top = Math.random() * 70 + 10; // between 10% and 80%
    const left = Math.random() * 70 + 10; // between 10% and 80%
    setNoBtnPos({ top: `${top}%`, left: `${left}%` });
  };

  // When "No" is pressed, move and show "Really?"
  const handleNoClick = (e) => {
    e.preventDefault();
    setShowReally(true);
    moveNoButton();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-[100dvh] w-screen bg-gradient-to-br from-pink-200 via-blue-100 to-purple-200 font-[Quicksand,sans-serif]">
      {!answered ? (
        <div className="relative bg-white/90 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] px-8 py-6 flex flex-col items-center gap-6 max-w-xs w-full border-4 border-pink-100">
          <img
            src="https://tenor.com/view/mochi-mochimochi-gif-24509947.gif"
            alt="Mochimochi Cat"
            className="w-28 h-28 rounded-full shadow-lg mb-2"
            style={{ objectFit: "cover" }}
          />
          <h1 className="text-2xl font-extrabold text-center text-purple-600 drop-shadow-[0_2px_8px_rgba(186,104,200,0.18)]">
            do u like me? <span className="text-3xl">🥺</span>
          </h1>
          <div className="relative w-full h-40">
            <button
              className="px-8 py-3 bg-green-300 hover:bg-green-400 active:scale-105 text-white rounded-full font-bold text-lg shadow-lg absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 border-2 border-green-100"
              onClick={() => setAnswered(true)}
              style={{ zIndex: 10, boxShadow: "0 4px 24px 0 rgba(76,175,80,0.15)" }}
            >
              Yes
            </button>
            <button
              className="px-8 py-3 bg-pink-300 hover:bg-pink-400 active:scale-110 text-white rounded-full font-bold text-lg shadow-lg absolute transition-all duration-200 border-2 border-pink-200"
              style={{
                top: noBtnPos.top,
                left: noBtnPos.left,
                transform: "translate(-50%, -50%)",
                zIndex: 20,
                boxShadow: "0 4px 24px 0 rgba(244,143,177,0.18)",
              }}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={handleNoClick}
            >
              No
            </button>
            {showReally && (
              <div
                className="absolute text-base font-bold text-pink-500 bg-white/95 px-4 py-2 rounded-2xl shadow-lg border-2 border-pink-200"
                style={{
                  top: `calc(${noBtnPos.top} - 48px)`,
                  left: noBtnPos.left,
                  transform: "translate(-50%, -100%)",
                  zIndex: 30,
                  pointerEvents: "none",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                really?
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white/95 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] px-8 py-6 flex flex-col items-center gap-4 max-w-xs w-full border-4 border-blue-100">
          <img
            // src="https://tenor.com/view/mochi-mochimochi-gif-24509680.gif"
            src="https://tenor.com/view/peach-and-goma-cuddle-goma-cuddle-peach-goma-love-peach-and-goma-hug-gif-11226330665226391694.gif"
            alt="Happy Mochimochi Cat"
            className="w-28 h-28 rounded-full shadow-lg mb-2"
            style={{ objectFit: "cover" }}
          />
          <h2 className="text-xl font-bold text-center text-[#1DA1F2]">
            Yay! thank u 4 liking me :D <span className="text-2xl">💙</span>
          </h2>
        </div>
      )}
    </div>
  );
}