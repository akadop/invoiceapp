import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

export default {
  ...lightBaseTheme,
  fontFamily: 'Open Sans, Roboto, sans-serif',
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: '#5677fc',
    primary1Dark: '#455ede',
    accent1Color: '#FF7043',
  },
  datePicker: {
    selectColor: 'rgba(68, 138, 255, 0.89)',
  },
  timePicker: {
    headerColor: '333',
  },
  appBar: {
    color: '#29B6F6',
    textColor: '#fff',
    titleFontWeight: 400,
    marginTop: 0,
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
  navigation: {
    fontSize: 15,
    paddingBottom: 15,
    display: 'block',
  },
}
