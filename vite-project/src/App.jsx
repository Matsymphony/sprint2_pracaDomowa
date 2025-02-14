import { useState } from 'react';
import StartScreen from './components/StartScreen.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import SummaryScreen from './components/SummaryScreen.jsx';

function App() {
  const [screen, setScreen] = useState('start');
  const [userAnswers, setUserAnswers] = useState([]);

  function handleStart() {
    setScreen('quiz');
  }

  function handleSummary(finalAnswers) {
    setUserAnswers(finalAnswers);
    setScreen('summary');
  }

  function handleRestart() {
    setUserAnswers([]);
    setScreen('start');
  }
  
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };
  


  return (
    <div style={appContainerStyle}>
      {screen === 'start' && (
        <StartScreen onStartQuiz={handleStart} />
      )}
      {screen === 'quiz' && (
        <QuizScreen onSummary={handleSummary} />
      )}
      {screen === 'summary' && (
        <SummaryScreen
          userAnswers={userAnswers}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}  

export default App;
