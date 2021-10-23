import React from 'react'
import Badge from './Badge'
import {Card} from '@mui/material'
export default function QuizzCard(props) {
  const {quizTitle,img:{src,alt},roles} = props
  return (
    <Card className="quizz-card">
      <img src={src} alt={alt} />
      <div className="quiz-info">
        <div className="title">{quizTitle}</div>
        <div className="roles">
          {roles.map(e=>{return <Badge text={e} />})}
        </div>
      </div>
    </Card>
  )
}
