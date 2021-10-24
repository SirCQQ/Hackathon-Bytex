import React from 'react'
import useTheme from "../hooks/themeHook";

const HOUSES = ["Slytherin", "Gryfindorr", "Hufflepuff", "Ravenclaw"];
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default function ProjectUser(props) {
  // HOUSES[randomIntFromInterval(0,3)]
  const {palette:{primary}}= useTheme()
  return (
    <div className='user-info'>
      <img  style={{borderColor:primary.main}}  src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg" alt="avarat_photo" />
      <p className="name">{props.name}</p>
      <p className="role">{props.role}</p>
      <p className="house">{HOUSES[randomIntFromInterval(0,3)]}</p>
    </div>
  )
}
