import React from "react";
import { QUIZZES } from "../data/quizzes";
import { JOBS } from "../data/jobs";
import QuizzCard from "./QuizzCard";
import JobCard from "./JobCard";
import useTheme from "../hooks/themeHook";
import ProjectCard from './ProjectCard'
import {companyProjects as PROJECTS} from '../data/projects'
import {Link} from 'react-router-dom'
import Badge from './Badge'

export default function Homepage() {
  const {
    palette: { primary },
  } = useTheme();
  const HOUSES=[
    "Slytherin",
    "Gryfindorr",
    "Hufflepuff",
    "Ravenclaw"]
  return (
    <div className='homepage'>
      <p className='part-title'>Harry Potter Housing Quizz</p>
      <div className='card-list'>

      <Link to={`/housing-test`} className='link-card sorting'>
      <div className='card quizz sorting' style={{ borderColor: primary.main }}>
        <img src="https://static.posters.cz/image/1300/postere/harry-potter-hogwarts-school-crest-i73597.jpg" alt="HP Logo" />
        <div className='title'>Sorting Quizz</div>
        <div className='tags'>
          {HOUSES.map((e,i) => {
            return <Badge key={i} text={e} />;
          })}
        </div>
      </div>
    </Link>
</div>
        <p className='part-title'> Quizzes </p>
      <div className='card-list'>
        {QUIZZES.map((e,i) => {
          return <QuizzCard {...e} key={e.id} />;
        })}
      </div>
        <p className='part-title'>Projects</p>
      <div className='card-list'>
        {PROJECTS.map(e=>{
            return <ProjectCard key={e.id}{...e} />
            })}
      </div>
        <p className='part-title'>Jobs</p>
      <div className='card-list'>
        {JOBS.map((e) => {
          return <JobCard {...e} key={e.id}/>;
        })}
      </div>
    </div>
  );
}
