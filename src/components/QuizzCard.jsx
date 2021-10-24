import React from "react";
import Badge from "./Badge";
import useTheme from "../hooks/themeHook";
import { Link } from "react-router-dom";
export default function QuizzCard(props) {
  const {
    palette: { primary },
  } = useTheme();
  const {
    quizTitle,
    img: { src, alt },
    roles,
    id,
  } = props;
  return (
    <Link to={`/quiz/${id}`} className='link-card'>
      <div className='card quizz' style={{ borderColor: primary.main }}>
        <img src={src} alt={alt} />
        <div className='title'>{quizTitle}</div>
        <div className='tags'>
          {roles.map((e,i) => {
            return <Badge key={i} text={e} />;
          })}
        </div>
      </div>
    </Link>
  );
}
