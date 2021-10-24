import React from "react";
import { useParams } from "react-router";
import { companyProjects } from "../data/projects";
import Badge from "./Badge";
import JobCard from "./JobCard"
import ProjectUser from "./ProjectUser";
export default function Project() {
  const { id } = useParams();
  const project = companyProjects.find((e) => {
    console.log(e, parseInt(id), e.id === id);
    return e.id === parseInt(id);
  });
  console.log(project);
  return (
    <div className='project-page page'>
      <img src={project.logo.src} alt={project.logo.alt} />
      <div className='info'>
        <h2>{project.name}</h2>
          <p>Description:</p>
        <div className='description'>
          {project.description}
        </div>
          <p>Stack:</p>
        <div className='stack'>
          {project.stack.map((e, i) => (
            <Badge key={i} text={e} />
          ))}
        </div>
          <p>Team:</p>
        <div className='user'>
          {project.team.map((e, i) => {
            return <ProjectUser key={i} {...e} />;
          })}
        </div>
        <p>Openings:</p>
        <div className="openings">
          {project.openPositions.map((e,i)=><JobCard key={i} {...e}/>)}
        </div>
      </div>
    </div>
  );
}
