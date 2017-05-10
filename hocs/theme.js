import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

export default {
  ...lightBaseTheme,
  fontFamily: 'Open Sans, Roboto, sans-serif',
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: 'rgba(68, 138, 255, 0.89)',
    accent1Color: '#d500f9',
  },
  bottomNavigation: {
    backgroundColor: '#fcfdfd',
    labelColor: '#333',
    unselectedColor: 'rgba(0, 0, 0, 0.54)',
    selectedColor: 'rgba(68, 138, 255, 0.89)',
    height: 58,
  },
  datePicker: {
    selectColor: 'rgba(68, 138, 255, 0.89)',
  },
  timePicker: {
    headerColor: '333',
  },
  appBar: {
    color: '#fcfdfd',
    textColor: '#222',
    titleFontWeight: 400,
    padding: 24,
    height: 64,
  },
  tabs: {
    backgroundColor: '#fcfdfd',
    textColor: '#333',
    selectedTextColor: '#222',
  },
}
