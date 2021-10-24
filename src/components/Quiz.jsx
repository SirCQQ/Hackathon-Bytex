import React
// , { useState, useEffect }
 from "react";
import { useParams } from "react-router-dom";
import {addBadge} from '../redux/actions/user'

// import { useSelector, useDispatch } from "react-redux";
import Answer from "./Answer";
import {reactQuiz} from '../data/quiz-react'
import {quizCareerSelection} from '..data/quiz-career-selection'
import {quizTeamSelection} from '..data/quiz-team-selection'
import useQuiz from '../hooks/quizhook'
import { useSelector } from "react-redux"
function Quiz() {
  const usqer = useSelector(state=>state.user)
  let selectedQuiz = reactQuiz;
  if (id == 6) {
    selectedQuiz = quizCareerSelection;
  }
  if (id == 7) {
    selectedQuiz = quizTeamSelection;
  }
  const {question,numberOfQuestions,setAnswerToQuestion,currentQuestion,result} = useQuiz(selectedQuiz,addBadge,reactQuiz.badge)
  console.log(result)
  return (
    <div className='quiz-page'>
      <h2>{reactQuiz.quizTitle}</h2>
      {numberOfQuestions!==currentQuestion?<div className='quiz'>
        {`${currentQuestion+1}/${numberOfQuestions}`}
        <p>{`Question ${currentQuestion}: ${question.question}`} </p>
        <div className='answers'>
          {question.answers.map((e,i)=>{
            return <Answer onClick={()=>{
              setAnswerToQuestion(i)
            }}>{e}</Answer>
          })}
        </div>
      </div>:(<div>Result {result}
      {console.log(user)}</div>)}
    </div>
  );
}

export default Quiz;
