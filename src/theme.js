import { grey } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey['800'],
    },
    // secondary: green,
  },
})

export default theme
