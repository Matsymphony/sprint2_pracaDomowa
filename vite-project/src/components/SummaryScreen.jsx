import PropTypes from 'prop-types';
import Button from './Button';
import { QUESTIONS } from '../quizQuestions';

function SummaryScreen({ userAnswers, onRestart }) {
 
  const correctCount = userAnswers.filter((ans) => ans.isCorrect).length;
  const total = userAnswers.length;
  const percentage = Math.round((correctCount / total) * 100);
  const isPassed = percentage >= 80;

  
  const containerStyle = {
    width: '800px',
    margin: '0 auto',
    textAlign: 'center',
  };

  
  const buttonStyle = {
    width: '60%',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '10px 0',
    backgroundColor: isPassed ? 'green' : 'red',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={containerStyle}>
        <h2
          style={{
            fontSize: '48px',
            color: isPassed ? 'green' : 'red',
            marginBottom: '10px',
         
          }}
        >
          {isPassed
            ? 'Gratulacje! Quiz zaliczony!'
            : 'Niestety, quiz niezaliczony'}
        </h2>
        <p style={{  fontSize: '28px' }}>
  Twój wynik:{' '}
  <span style={{ color: isPassed ? 'green' : 'red' }}>
    {percentage}%
  </span>{' '}
  ({correctCount} z {total} poprawnych odpowiedzi)
</p>
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          {userAnswers.map((ans, index) => {
            const question = QUESTIONS[ans.questionIndex];
            const userAnswerObj = question.answers[ans.chosenAnswerIndex];

            return (
              <div key={index} style={{ marginBottom: '15px' }}>
                <h3
                  style={{
                    color: 'blue',
                    fontSize: '18px',
                    margin: '0 0 5px 0',
                  }}
                >
                  Pytanie {ans.questionIndex + 1}: {question.text}
                </h3>
                <div
                  style={{ color: '#000', fontWeight: 'bold',  marginLeft: '10px' }}
                >
                  Twoja odpowiedź:{' '}
                  <span
                    style={{
                      color: ans.isCorrect ? 'green' : 'red',
                    }}
                  >
                    {userAnswerObj.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '30px' }}>
          <Button
            label={isPassed ? 'Gratulacje! Restart quizu' : 'Powrót do startu'}
            onClick={onRestart}
            style={buttonStyle}
          />
        </div>
      </div>
    </div>
  );
}

SummaryScreen.propTypes = {
  onRestart: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      questionIndex: PropTypes.number.isRequired,
      chosenAnswerIndex: PropTypes.number.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default SummaryScreen;
