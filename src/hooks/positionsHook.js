import { useSelector } from 'react-redux'



const usePositions = () => {
  const projects = useSelector(state => state.projects.projects)
  console.log(projects)
  let jobs = []
  let projectApplicants = []

  projects.forEach(proj => {
    // console.log(proj.openPositions)
    if (proj.openPositions) {

      let newJobs = proj.openPositions.map(e => {
        return e
      })
      jobs = [...jobs, ...newJobs]
    }
    if (proj.applicants) {
      projectApplicants = [...projectApplicants, proj.applicants]
    }
  })

  return { jobs, projectApplicants }
}


export {usePositions} 