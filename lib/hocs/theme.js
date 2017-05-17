import { grey600 } from 'material-ui/styles/colors'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { typography } from 'material-ui/styles'

export default {
  ...lightBaseTheme,
  fontFamily: 'Open Sans, Roboto, sans-serif',
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: '#5677fc',
    primary1Dark: '#455ede',
    accent1Color: '#2ECC71',
  },
  datePicker: {
    selectColor: 'rgba(68, 138, 255, 0.89)',
  },
  timePicker: {
    headerColor: '333',
  },
  appBar: {
    color: '#333',
    textColor: '#fff',
    titleFontWeight: 400,
    height: 57,
    marginTop: 0,
  },
  drawer: {
    color: '#fff',
  },
  navigation: {
    fontSize: 15,
    fontWeight: typography.fontWeightLight,
    background: '#212121',
    paddingBottom: 15,
    display: 'block',
  },
  tabs: {
    backgroundColor: '#fcfdfd',
    textColor: '#333',
    selectedTextColor: '#222',
  },
  paper: {
    padding: 30,
  },
  clear: {
    clear: 'both',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
}
