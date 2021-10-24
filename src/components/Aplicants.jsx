import React from "react";
import { usePositions } from "../hooks/positionsHook";
import Badge from "./Badge";

export default function Aplicants() {
  const { jobs, projectApplicants } = usePositions();

  return (
    <div className='hr-jobs'>
      {jobs.map((e) => {console.log(e)
        return (
          <div className='project'>
            <p>{e.name}</p>
            <p>Stack:</p>
            <div className='stack'>
              {e.tags.map((e) => (
                <Badge {...e} />
              ))}
            </div>
            <p>Applicants</p>
            <div className='applicants'></div>
          </div>
        );
      })}
    </div>
  );
}
