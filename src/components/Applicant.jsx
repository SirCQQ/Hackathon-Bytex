import React from "react";
import useTheme from "../hooks/themeHook";
import Badge  from "./Badge";

// const HOUSES = ["Slytherin", "Gryfindorr", "Hufflepuff", "Ravenclaw"];
// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
export default function Applicant(props) {
  // HOUSES[randomIntFromInterval(0,3)]
  const {
    palette: { primary },
  } = useTheme();
  console.log(props)
  return (
    <div className='user-info'  style={{ borderColor: primary.main }}>
      <img
        style={{ borderColor: primary.main }}
        src='https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg'
        alt='avarat_photo'
      />
      <p className='name'>{props.name}</p>
      <div className='stack badges'>
        {props.badges.map((e) => {return  (<Badge text={e} />
        )})}
      </div>
    </div>
  );
}
