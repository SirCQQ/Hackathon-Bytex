import { useSelector } from 'react-redux'
import { COLOR_SCHEMAS } from '../data/colorSchema'
const useTheme = () => {
  const userTheme = useSelector(state => state.user.theme)

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
}


export default useTheme