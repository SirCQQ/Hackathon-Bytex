import React from 'react'

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useSelector } from "react-redux"
import { COLOR_SCHEMAS } from './data/colorSchema'
export default function ThemeHOC(props) {
  const userTheme = useSelector(state => state.user.theme)
  console.log(userTheme)
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
      {props.children}
      </ThemeProvider>
  )
}
