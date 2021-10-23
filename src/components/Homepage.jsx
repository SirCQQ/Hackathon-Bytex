import React from "react";
import { QUIZZES } from "../data/quizzes";
import { JOBS } from "../data/jobs";
import QuizzCard from "./QuizzCard";
import JobCard from "./JobCard";
import ProjectCard from './ProjectCard'
import {companyProjects as PROJECTS} from '../data/projects'

export default function Homepage() {
  // const quizzes = useSelector((state) => state.quizzes);
  console.log(JOBS);
  return (
    <div className='homepage'>
        <p> Quizzes </p>
      <div className='card-list'>
        {QUIZZES.map((e) => {
          return <QuizzCard {...e} />;
        })}
      </div>
        <p>Projects</p>
      <div className='card-list'>
        {PROJECTS.map(e=>{
            return <ProjectCard {...e} />
            })}
      </div>
        <p>Jobs</p>
      <div className='card-list'>
        {JOBS.map((e) => {
          return <JobCard {...e} />;
        })}
      </div>
    </div>
  );
}
