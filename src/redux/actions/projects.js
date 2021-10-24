import { createSlice } from '@reduxjs/toolkit'
import {companyProjects} from '../../data/projects'
export const user = createSlice({
  name: 'projects',
  initialState: {
    projects:companyProjects
  },
  reducers: {
    addCandidateToProject:(state,action)=>{
      console.log('payload',action.payload)
      let projectIndex= state.projects.findIndex((e)=>{
        console.log(e.id,action.payload.project_id)
        return e.id===parseInt(action.payload.project_id)})
      let project= {...state.projects[projectIndex]}
      console.log("In reducer",projectIndex,project)
      project.applicants=[...project.applicants,action.payload.applicant]
      state.projects.splice(projectIndex,1,project)
    },
    removeCandidateFromProject:(state,action)=>{
      let projectIndex= state.projects.findIndex((e)=>{return e.id===parseInt(action.payload.project_id)})
      let project= {...state.projects[projectIndex]}
      project.applicants.splice(project.applicants.findIndex(e=>e.id===parseInt(action.payload.userId)),1);
      console.log(project.applicants)
      state.projects.splice(projectIndex,1,project)
    }
  }
})

// Action creators are generated for each case reducer function
export const {removeCandidateFromProject,addCandidateToProject} = user.actions

export default user.reducer