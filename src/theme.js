import { grey } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  breakpoints: {
    hideDrawer: 710,
    smallHome: 635,
    shrinkDonate: 425,
  },
  palette: {
    primary: {
      main: grey['800'],
    },
    // secondary: green,
  },
})

export default theme
