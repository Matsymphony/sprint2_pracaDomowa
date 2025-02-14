import { useState } from 'react';
import PropTypes from 'prop-types';
import { QUESTIONS } from '../quizQuestions';
import Button from './Button';

function QuizScreen({ onSummary }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  function handleAnswerSelect(answerIndex) {
    const chosenAnswer = currentQuestion.answers[answerIndex];

    const newAnswer = {
      questionIndex: currentQuestionIndex,
      chosenAnswerIndex: answerIndex,
      isCorrect: chosenAnswer.isCorrect,
    };

    const updatedAnswers = [...selectedAnswers, newAnswer];
    setSelectedAnswers(updatedAnswers);

    const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;
    if (isLastQuestion) {
      onSummary(updatedAnswers);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }
  const containerStyle = {
    width: '800px',
    margin: '0 auto',
    textAlign: 'center',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={containerStyle}>
        <p
          style={{
            color: '#2069f0',
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >Pytanie {currentQuestionIndex + 1}: {currentQuestion.text}
        </p>

        {currentQuestion.answers.map((answer, index) => (
          <div key={index} style={{ margin: '10px 0' }}>
            <Button
              label={answer.text}
              onClick={() => handleAnswerSelect(index)}
              style={{
                width: '50%',
                backgroundColor: '#002c02f2',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                padding: '10px 0',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

QuizScreen.propTypes = {
  onSummary: PropTypes.func.isRequired,
};

export default QuizScreen;
