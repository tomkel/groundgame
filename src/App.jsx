import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from './components/layout'
import theme from './theme'

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </MuiThemeProvider>
  )
}
