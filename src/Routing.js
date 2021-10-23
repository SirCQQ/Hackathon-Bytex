import React from "react"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useSelector, useDispatch } from "react-redux"
import { COLOR_SCHEMAS } from './data/colorSchema'
import Navigation from "./components/Navigation"
import Homepage from './components/Homepage'
export default function Routing() {
  const dispatch = useDispatch()
  const userTheme = useSelector(state => state.user.theme)
  let theme = createTheme({
    palette: {
      primary: {
        main: COLOR_SCHEMAS[userTheme].primary,
        contrastText: COLOR_SCHEMAS[userTheme].primaryText

      },
      secondary: {
        main: COLOR_SCHEMAS[userTheme].secondary,
        contrastText: COLOR_SCHEMAS[userTheme].secondaryText
      },
      mode: "dark"
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch> */}
        <Route path="/">
          {/* <Home /> */}
          <Navigation />
        </Route>

        <Route exact path='/'>
            <Homepage />
        </Route>

        <Route path="/housing-test">
          {/* <About /> */}
          <div>Mere
          </div>

        </Route>
        <Route path="/quizze">
          {/* <Users /> */}
          <div>Pere</div>
        </Route>
        {/* </Switch> */}
      </Router>
    </ThemeProvider>
  )
}