import React from 'react'
import { useSelector } from 'react-redux'
import {QUIZZES} from '../data/quizzes'
import QuizzCard from './QuizzCard'
export default function Homepage() {
  const quizzes = useSelector(state => state.quizzes)
  return (
    <div className='homepage'>
        <div className="quizzes">
            {QUIZZES.map(e=>{
              return <QuizzCard {...e} />
            })}
        </div>
        <div className="jobs">

        </div>
    </div>
  )
}
