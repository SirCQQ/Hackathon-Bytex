import React from "react";
import Badge from "./Badge";
import useTheme from "../hooks/themeHook";


export default function ProjectCard({ id, name, description, stack, logo }) {
  const {palette:{primary}}= useTheme()
  return (
    <div className='card projects' style={{borderColor:primary.main}} >
      <img src={logo.src} alt={logo.alt} />
      <div className='title'>{name}</div>
      <div className='tags'>
        {stack.map((e) => {
          return <Badge text={e} />;
        })}
      </div>
    </div>
  );
}
