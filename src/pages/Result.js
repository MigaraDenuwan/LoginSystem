import React from 'react';

function Result({ score, totalQuestions, signOutHandler }) {
  return (
    <div>
        <button
        onClick={signOutHandler}
      className="absolute top-1 right-2 mt-6 w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-white border border-black rounded-xl text-black font-bold text-lg"
      >
        Sign Out
      </button>
    <div className="relative text-center">
      
      <h2 className="text-4xl font-bold mb-4">Your Score: {score} / {totalQuestions}</h2>
      <p className="text-lg font-medium">
        {score === totalQuestions
          ? "Excellent! You got all answers correct!"
          : score >= totalQuestions / 2
          ? "Good job! You passed the quiz."
          : "Better luck next time!"}
      </p>
      <p className="mt-6">Thank you for participating in the quiz!</p>
    </div>
    </div>
  );
}

export default Result;
