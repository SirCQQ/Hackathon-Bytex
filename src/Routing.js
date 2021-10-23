import React from "react"
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from "react-router-dom"
import {changeTheme} from './redux/actions/user'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useSelector,useDispatch } from "react-redux"
import { COLOR_SCHEMAS } from './data/colorSchema'
import {Button} from '@mui/material'

export default function Routing() {
  const dispatch = useDispatch()
  const userTheme = useSelector(state => state.user.theme)
  let theme = createTheme({
    palette: {
      primary: { 
        main: COLOR_SCHEMAS[userTheme].primary,
        contrastText:COLOR_SCHEMAS[userTheme].primaryText
      
      },
      secondary: {
        main: COLOR_SCHEMAS[userTheme].secondary,
        contrastText: COLOR_SCHEMAS[userTheme].secondaryText
      },
      mode:"dark"
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch> */}
        <Route path="/housing-test">
          {/* <About /> */}
          <div>Mere
            </div>

        </Route>
        <Route path="/quizze">
          {/* <Users /> */}
          <div>Pere</div>
        </Route>
        <Route path="/">
          {/* <Home /> */}
          <div>Banana
            <Button >Test</Button>
            <Button variant="contained" color="primary"onClick={()=>{dispatch(changeTheme("default"))}}>default</Button>
            <Button variant="contained" color="primary"onClick={()=>{dispatch(changeTheme("slytherin"))}}>1</Button>
            <Button variant="contained" color="primary"onClick={()=>{dispatch(changeTheme("gryfindorr"))}}>2</Button>
            <Button variant="contained" color="primary"onClick={()=>{dispatch(changeTheme("hufflepuff"))}}>3</Button>
            <Button variant="contained" color="primary"onClick={()=>{dispatch(changeTheme("ravenclaw"))}}>4</Button>
          </div>
        </Route>
        {/* </Switch> */}
      </Router>
    </ThemeProvider>
  )
}