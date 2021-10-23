import { companyProjects } from './projects'

let JOBS = []

companyProjects.forEach(proj => {
  // console.log(proj.openPositions)
  if (proj.openPositions) {

    JOBS = [...JOBS, ...proj.openPositions.map(e => {
      return {
        ...e, 
        projectId: proj.id, 
        projectName: proj.name 
      }
    })]
  }
})


export { JOBS }


// "openPositions":[
//   {
//     "name": "Frontend React Developer",
//     "level": "Junior",
//   },
//   {
//     "name": "Backend Java Developer",
//     "level": "Junior",
//   }
// ]