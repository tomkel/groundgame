import React, { useEffect } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { styled } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/layout'
import theme from './theme'
import la from './images/la-bw.jpg'

function preload() {
  new Image().src = la
}

export default function App() {
  useEffect(() => preload(), [])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route children={({ match }) => <Layout match={match} />} />
      </Router>
    </MuiThemeProvider>
  )
}
