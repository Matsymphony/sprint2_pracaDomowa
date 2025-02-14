import PropTypes from 'prop-types';
import Button from './Button';

function StartScreen({ onStartQuiz }) {
  const containerStyle = {
    display: 'inline-block',
    width: '400px',
    textAlign: 'center',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={containerStyle}>
        <h1
          style={{
            marginBottom: '30px',
            color: '#000000',
            fontSize: '36px',
          }}
        >
          Javascript Quiz
        </h1>

        <Button
          label="Rozpocznij Quiz"
          onClick={onStartQuiz}
          style={{
            width: '100%',
            backgroundColor: '#3ea2ff',
            color: '#000',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '10px 0',
            
          }}
        />
      </div>
    </div>
  );
}

StartScreen.propTypes = {
  onStartQuiz: PropTypes.func.isRequired,
};

export default StartScreen;
