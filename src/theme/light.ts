/* Light Theme           */
/* Add only colors here. */

import { darken, lighten } from 'polished'

const error = '#db3333'
const success = '#33dd33'
const primary = '#df7126'
const primaryHover = lighten(0.2, primary)
const secondary = '#fbf236'
const tertiary = '#A6CFD5'
const textColor = '#222'
const borderColor = darken(0.3, secondary)
const darkGray = 'rgb(10, 25, 50)'
const darkGrayDarkened = darken(0.1, '#fff')
const darkBlue = 'rgb(6, 75, 141)'
const mainBackgroundColor = lighten(0.38, secondary)
const componentBackgroundColor = darken(0.3, secondary)
const darkYellow = lighten(0.3, secondary)

export const light = {
  body: {
    backgroundColor: mainBackgroundColor,
    backgroundImage: 'none',
  },
  buttonDropdown: {
    backgroundColor: '#fff',
    backgroundColorHover: darkGrayDarkened,
    borderColor: primary,
    borderColorHover: primary,
    color: textColor,
    colorHover: textColor,
  },
  buttonPrimary: {
    backgroundColor: primary,
    backgroundColorHover: primaryHover,
    borderColor: primary,
    borderColorHover: primaryHover,
    color: '#fff',
    colorHover: '#fff',
  },
  card: {
    backgroundColor: darkYellow,
    borderColor: borderColor,
  },
  checkBox: {
    backgroundColorActive: secondary,
    backgroundColor: '#fff',
    borderColor: borderColor,
  },
  colors: {
    borderColor: borderColor,
    componentBackgroundColor: componentBackgroundColor,
    darkBlue: darkBlue,
    darkGray: darkGray,
    error: error,
    primary: primary,
    secondary: secondary,
    success: success,
    tertiary: tertiary,
    textColor: textColor,
  },
  dropdown: {
    background: darkYellow,
    borderColor: borderColor,
    boxShadow: 'none',
    item: {
      backgroundColor: 'transparent',
      backgroundColorHover: primaryHover,
      borderColor: borderColor,
      color: textColor,
      colorDanger: error,
      colorHover: '#fff',
      colorOK: success,
    },
  },
  textField: {
    backgroundColor: '#fff',
    borderColor: borderColor,
    color: textColor,
    errorColor: error,
    successColor: success,
    active: {
      backgroundColor: '#fff',
      borderColor: primary,
      boxShadow: 'none',
      color: textColor,
    },
    placeholder: {
      color: '#999',
    },
  },
  header: {
    backgroundColor: mainBackgroundColor,
    color: textColor,
  },
  mainMenu: {
    color: textColor,
  },
  mobileMenu: {
    color: textColor,
    backgroundColor: '#fff',
    borderColor: borderColor,
  },
  modal: {
    overlayColor: 'rgba(255, 255, 255, 0.8)',
  },
  radioButton: {
    backgroundColorActive: secondary,
    backgroundColor: '#fff',
    borderColor: borderColor,
  },
  onBoard: {
    backgroundColor: componentBackgroundColor,
    color: textColor,
    borderRadius: '5px',
    borderColor: borderColor,
    sidebarBackgroundColor: 'rgb(235, 235, 237)',
  },
  toast: {
    backgroundColor: componentBackgroundColor,
    borderColor: borderColor,
    boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.25)',
  },
}
