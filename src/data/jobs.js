import { companyProjects } from './projects'

let JOBS = []

companyProjects.forEach(proj => {
  // console.log(proj.openPositions)
  if (proj.openPositions) {
    let newJobs=proj.openPositions.map(e => {
      return e
    })
    JOBS = [...JOBS,...newJobs ]
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