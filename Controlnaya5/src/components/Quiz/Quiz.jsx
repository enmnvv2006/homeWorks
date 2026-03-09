export const Quiz = ({ question, isCorrect, setIsCorrect }) => {
  return (
    <div>
      <h2>{question}</h2>

      <button onClick={() => setIsCorrect(false)}>A Лондон</button>
      <button onClick={() => setIsCorrect(true)}>B Париж</button>
      <button onClick={() => setIsCorrect(false)}>C Берлин</button>
      <button onClick={() => setIsCorrect(false)}>D Мадрид</button>

      {isCorrect ? <p>ПРАВИЛЬНО!</p> : null}
    </div>
  );
};
