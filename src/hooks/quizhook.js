import {useState,useMemo} from 'react' 
import { useDispatch } from 'react-redux'
import {addMoney} from '../redux/actions/user'
const useQuiz = (quiz,dispFunc,valueToDisp,customAmmountWon=1)=>{
  const numberOfQuestions=quiz.questions.length 
  const dispatch = useDispatch()
  // const [,setCurrentQuestion] = useState()
  const [answers,setAnswers]= useState({})
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [result,setResult]= useState(0)
  useMemo(()=>{
    if(currentQuestion===numberOfQuestions){
      const result = quiz.questions.reduce((acc,cur,i)=>{
        if(parseInt(quiz.questions[i].correctAnswer)===answers[i]){
          return acc+1
        }
          return acc;
      },0)
      // if(result>numberOfQuestions/2+1){
        dispatch(dispFunc(valueToDisp))
      // }
      setResult(result)
      dispatch(addMoney(result*customAmmountWon))

    }
  },[answers,quiz,currentQuestion])
  const setAnswerToQuestion = (answerIndex)=>{
    // console.log(index)
    setCurrentQuestion(prev=>prev+1);
    setAnswers(prev=>{
      return {...prev,[currentQuestion]:answerIndex+1}
    })

  }
  return {
    question:quiz.questions[currentQuestion],
    numberOfQuestions:numberOfQuestions,
    setAnswerToQuestion,
    currentQuestion:currentQuestion,
    result
  }
}


export default useQuiz; 