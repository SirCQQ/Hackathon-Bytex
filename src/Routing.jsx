import React from "react"
import {
  BrowserRouter as Router,
  Route,
  // Switch,
} from "react-router-dom"
import Navigation from "./components/Navigation"
import Homepage from './components/Homepage'
import Quiz from "./components/Quiz"
import HousingQuiz from "./components/HousingQuiz"
import Project from "./components/Project"
import Aplicants from "./components/Aplicants"
export default function Routing() {
  return (
    
      <Router>
        <Route path="/" component={Navigation}/>
        <Route exact path='/' component={Homepage}/>
        <Route path="/housing-test" component={HousingQuiz}/>
        <Route path="/project/:id" component={Project}/>
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/aplicants" component={Aplicants} />
        
      </Router>
  )
}