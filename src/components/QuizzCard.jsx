import React from 'react'
import Badge from './Badge'
import useTheme from "../hooks/themeHook";
export default function QuizzCard(props) {
  const {palette:{primary}}= useTheme()
  const {quizTitle,img:{src,alt},roles} = props
  return (
    <div className="card quizz" style={{borderColor:primary.main}}>
      <img src={src} alt={alt} />
        <div className="title">{quizTitle}</div>
        <div className="tags">
          {roles.map(e=>{return <Badge text={e} />})}
        </div>
    </div>
  )
}
