import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { typography } from 'material-ui/styles'

export default {
  ...lightBaseTheme,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: '#7e57c2',
    primary2Color: '#7b1fa2',
    accent1Color: '#ff4081',
    textColor: '#222'
  },
  datePicker: {
    selectColor: 'rgba(68, 138, 255, 0.89)'
  },
  timePicker: {
    headerColor: '#333'
  },
  appBar: {
    textColor: '#fff',
    titleFontWeight: 400,
    height: 57,
    marginTop: 0
  },
  navigation: {
    fontSize: 14,
    fontWeight: typography.fontWeightLight,
    background: '#212121',
    paddingBottom: 15,
    display: 'block'
  },
  paper: {
    padding: 30
  },
  clear: {
    clear: 'both'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
}
