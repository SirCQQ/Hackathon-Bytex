import React from "react";
import { changeTheme } from "../redux/actions/user";
import Answer from "./Answer";
import { reactQuiz } from "../data/quiz-react";
import useQuiz from "../hooks/quizhook";
import { useSelector } from "react-redux";
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const HOUSES = ["Slytherin", "Gryfindorr", "Hufflepuff", "Ravenclaw"];
function HousingQuiz() {
  const user = useSelector((state) => state.user);
  const {
    question,
    numberOfQuestions,
    setAnswerToQuestion,
    currentQuestion,
    result,
  } = useQuiz(reactQuiz, changeTheme, HOUSES[randomIntFromInterval(0,3)].toLowerCase(),1000);
  console.log(result);
  return (
    <div className='quiz-page'>
      <h2>{reactQuiz.quizTitle}</h2>
      {numberOfQuestions !== currentQuestion ? (
        <div className='quiz'>
          {`${currentQuestion + 1}/${numberOfQuestions}`}
          <p>{`Question ${currentQuestion}: ${question.question}`} </p>
          <div className='answers'>
            {question.answers.map((e, i) => {
              return (
                <Answer
                  onClick={() => {
                    setAnswerToQuestion(i);
                  }}
                >
                  {e}
                </Answer>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          Result {result}
          {console.log(user.badges)}
        </div>
      )}
    </div>
  );
}

export default HousingQuiz;
