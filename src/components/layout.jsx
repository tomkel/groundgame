import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Bar from './bar'
import SideNav from './side-nav'
import Home from '../pages/home'
import About from '../pages/about'

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'grid',
    gridTemplateRows: `${theme.spacing(8)}px 1fr`,
    gridTemplateColumns: '1fr 18fr',
    gridTemplateAreas: [[
      '"barnav bar"',
      '"nav main"',
    ]],
    width: '100vw',
    height: '100vh',
  },
  bar: {
    gridRow: '1 / 3',
    gridColumn: '1 / 2',
    // ...theme.mixins.toolbar,
  },
  nav: {
    gridRow: '1 / 2',
    gridColumn: '1 / 3',
  },
  main: {
    gridRow: '2 / 3',
    gridColumn: '2 / 3',
    margin: theme.spacing(1),
  },
}))

export default function Layout() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  function toggleDrawer() {
    setOpen(!open)
  }

  function pointerOverDrawer(ev) {
    if (ev.pointerType === 'mouse') {
      setOpen(true)
    }
  }

  return (
    <Router>
      <div className={classes.layout}>
        <Bar isDrawerOpen={open} onHamburgerClick={toggleDrawer} className={classes.bar} />
        <SideNav isDrawerOpen={open} onPointerOver={pointerOverDrawer} className={classes.nav} />
        <div className={classes.main}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  )
}
