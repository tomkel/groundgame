import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { Route } from 'react-router-dom'
import clsx from 'clsx'
import Bar from './bar'
import SideNav from './side-nav'
import Home from '../pages/home'
import About from '../pages/about'

// Hides children when the route doesn't match
// This prevents components from being unmounted
// So twitter and actionNetwork won't need to be reinitialized with a bunch of
// network requests and lag
const useHideStyles = makeStyles((theme) => ({
  hide: { display: 'none' },
  fullHeight: { height: '100%' },
}))

function Hide({ match, children }) {
  const classes = useHideStyles()

  const hide = !(match && match.isExact)

  return (
    <div className={clsx(classes.fullHeight, hide && classes.hide)}>
      {children}
    </div>
  )
}

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
    overflowX: 'hidden',
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
  noOverflow: {
    overflowY: 'hidden',
  },
}))

function Layout({ match }) {
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
    <div className={classes.layout}>
      <Bar isDrawerOpen={open} onHamburgerClick={toggleDrawer} className={classes.bar} />
      <SideNav isDrawerOpen={open} onPointerOver={pointerOverDrawer} className={classes.nav} />
      <div className={clsx(classes.main, match.isExact && classes.noOverflow)}>
        <Route exact path="/" children={({ match }) => <Hide match={match}><Home match={match}/></Hide>} />
        <Route path="/about" children={(props) => <Hide {...props}><About /></Hide>} />
      </div>
    </div>
  )
}

export default Layout
