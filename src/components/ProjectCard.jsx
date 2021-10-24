import React from "react";
import Badge from "./Badge";
import useTheme from "../hooks/themeHook";
import {Link} from 'react-router-dom'

export default function ProjectCard({ id, name, description, stack, logo }) {
  const {palette:{primary}}= useTheme()
  return (
    <Link to={`/project/${id}`} className="link-card">
    <div className='card projects' style={{borderColor:primary.main}} >
      <img src={logo.src} alt={logo.alt} />
      <div className='title'>{name}</div>
      <div className='tags'>
        {stack.map((e,i) => {
          return <Badge key={i} text={e} />;
        })}
      </div>
    </div>
    </Link>
  );
}
