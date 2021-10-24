import React from "react";
import Badge from "./Badge";
import useTheme from "../hooks/themeHook";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addJobApplied, removeJobApplied } from "../redux/actions/user";
import {
  addCandidateToProject,
  removeCandidateFromProject,
} from "../redux/actions/projects";
export default function JobCard(props) {
  const user = useSelector((state) => state.user);
  const { name, level, tags, projectId, projectName, id } = props;
  //  console.log("Job props",props)
  const {
    palette: { primary },
  } = useTheme();
  const dispatch = useDispatch();
  const hasApplied = user.appliedJobs.find((e) => e.id === id);
  return (
    <div className='card job' style={{ borderColor: primary.main }}>
      <p className='job-title'>Title: {name}</p>
      <p className='job-title'>Project Name: {projectName}</p>
      <p className='level'>{`Experience level: ${level}`}</p>
      {!hasApplied ? (
        <Button
          variant='contained'
          className='job-aplication'
          onClick={() => {
            dispatch(addJobApplied(props));
            console.log(user);
            dispatch(
              addCandidateToProject({
                project_id: projectId,
                applicant: {
                  name: user.name,
                  userId: user.userId,
                  badges: user.badges,
                  positionId: id,
                },
              })
            );
          }}
        >
          Apply
        </Button>
      ) : (
        <Button
          variant='contained'
          className='job-aplication'
          onClick={() => {
            dispatch(removeJobApplied(id));
            dispatch(
              removeCandidateFromProject({
                project_id: projectId,
                userId: user.id,
              })
            );
          }}
        >
          remove
        </Button>
      )}

      <div className='tags'>
        {tags.map((e, i) => {
          return <Badge key={i} text={e} />;
        })}
      </div>
    </div>
  );
}
