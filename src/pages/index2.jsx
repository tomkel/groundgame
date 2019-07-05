import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Layout from '../components/layout2'
import theme from '../theme'

export default function Index2() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  )
}
