import React from "react";
import Badge from "./Badge";
import useTheme from "../hooks/themeHook";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addJobApplied, removeJobApplied } from "../redux/actions/user";
export default function JobCard(props) {
  const user = useSelector((state) => state.user);
  const { name, level, tags, projectId, projectName, id } = props;
  const {
    palette: { primary },
  } = useTheme();
  const dispatch = useDispatch();
  const hasApplied = user.appliedJobs.find((e) => e.id === id);

  return (
    <div className='card job' style={{ borderColor: primary.main }}>
      <p className='job-title'>Title: {name}</p>
      <p className='level'>{`Experience level: ${level}`}</p>
      {!hasApplied ? (
        <Button
          variant='contained'
          className='job-aplication'
          onClick={() => {
            dispatch(addJobApplied(props));
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
          }}
        >
          remove
        </Button>
      )}

      <div className='tags'>
        {tags.map((e) => {
          return <Badge text={e} />;
        })}
      </div>
    </div>
  );
}
