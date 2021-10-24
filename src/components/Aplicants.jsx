import React from "react";
import { usePositions } from "../hooks/positionsHook";
import Applicant from "./Applicant"
import Badge from "./Badge";

export default function Aplicants() {
  const { jobs, projectApplicants } = usePositions();
  console.log({projectApplicants})
  return (
    <div className='hr-jobs page'>
      {jobs.map((e) => {
        // console.log(e)
        return (
          <div className='project'>
            <p>{e.name}</p>
            <p>Stack:</p>
            <div className='stack'>
              {e.tags.map((e) => (
                <Badge text={e} />
              ))}
            </div>
            <p>Applicants</p>
            <div className='applicants'>
              {
              projectApplicants.filter(j=>e.id===j.positionId)
              .map(e=><Applicant {...e}/>)
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}
