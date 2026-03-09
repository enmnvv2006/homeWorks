import { useState } from "react";
import { Quiz } from "./components/Quiz/Quiz";

export const App = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  const question = "Стоица Франции?";
  const answers = [
    { id: 1, text: "A Лондон", isCorrect: false },
    { id: 2, text: "B Париж", isCorrect: true },
    { id: 3, text: "C Берлин", isCorrect: false },
    { id: 4, text: "D Мадрид", isCorrect: false },
  ];

  return (
    <>
      <h1>React App</h1>
      <Quiz
        question={question}
        answers={answers}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
      />
    </>
  );
};
