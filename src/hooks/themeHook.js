import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { COLOR_SCHEMAS } from '../data/colorSchema'
const useTheme = () => {
  const userTheme = useSelector(state => state.user.theme)
  
  // const [theme, setTheme] = useState({})
  // useEffect(() => {
    // setTheme(
    return   {
      palette: {
        primary: {
          main: COLOR_SCHEMAS[userTheme].primary,
          contrastText: COLOR_SCHEMAS[userTheme].primaryText
        },
        secondary: {
          main: COLOR_SCHEMAS[userTheme].secondary,
          contrastText: COLOR_SCHEMAS[userTheme].secondaryText
        },

      },
    }
    // )
  //   console.log('update')
  // // }, [])
  // // console.log(theme,userTheme)
  
  // return theme
}


export default useTheme