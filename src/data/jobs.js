import { companyProjects } from './projects'

let JOBS = []
let projectApplicants=[]

companyProjects.forEach(proj => {
  // console.log(proj.openPositions)
  if (proj.openPositions) {

    let newJobs=proj.openPositions.map(e => {
      return e
    })
    JOBS = [...JOBS,...newJobs ]
  }
  if(proj.applicants){
    projectApplicants=[...projectApplicants,proj.applicants]
  }
})


export { JOBS,projectApplicants }


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