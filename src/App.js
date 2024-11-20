import * as React from 'react';
import { useState, useEffect } from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { auth } from './fire';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState(null);

  const handleFinishQuiz = (finalScore, questionsCount) => {
    setScore(finalScore);
    setTotalQuestions(questionsCount);
    setShowResult(true);
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState('login');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser.email);
        setAuthState('home');
      } else {
        setUser(null);
        setAuthState('login');
      }
    });

    return unSubscribeAuth;
  }, []);

  if (authState === null) {
    return <div className='font-bold text-center text-5xl'>loading...</div>;
  }

  if (authState === 'login') {
    return <Login setAuthState={setAuthState} setUser={setUser} />;
  }

  if (authState === 'register') {
    return <Register setAuthState={setAuthState} setUser={setUser} />;
  }

  if (authState === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-600 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-8">Interactive Quiz</h1>
        <div className="bg-white p-10 rounded-lg shadow-lg text-gray-800 w-11/12 max-w-2xl">
          {showResult ? (
            <Result score={score} totalQuestions={totalQuestions} signOutHandler={signOutHandler} />
          ) : (
            <Quiz onFinish={handleFinishQuiz} />
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default App;
