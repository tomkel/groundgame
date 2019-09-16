import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import NavContents from './nav-contents'

const drawerWidth = 340
const usePermStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: theme.spacing(9),
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}))

function PermDrawer({ open, onPointerOver, children }) {
  const classes = usePermStyles()

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      PaperProps={{ elevation: open ? 16 : 1 }}
      open={open}
      onPointerOver={onPointerOver}
    >
      {children}
    </Drawer>
  )
}

const usePersistentStyles = makeStyles((theme) => ({
  drawer: {
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
  },
  paper: {
    width: drawerWidth,
  },
}))

function PersistentDrawer({ open, onPointerOver, children }) {
  const classes = usePersistentStyles()
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.paper,
      }}
      PaperProps={{ elevation: open ? 16 : 0 }}
      open={open}
      onPointerOver={onPointerOver}
    >
      {children}
    </Drawer>
  )
}


const useStyles = makeStyles((theme) => ({
  toolbar: {
    marginTop: theme.spacing(7),
    // ...theme.mixins.toolbar,
  },
}))

function SideNav({ isDrawerOpen: open, onPointerOver }) {
  const isSmallScreen = useMediaQuery(
    (theme) => theme.breakpoints.down(theme.breakpoints.hideDrawer),
  )

  const classes = useStyles()

  const nav = <NavContents className={classes.toolbar} />

  return isSmallScreen
    ? (
      <PersistentDrawer open={open}>
        {nav}
      </PersistentDrawer>
    )
    : (
      <PermDrawer open={open} onPointerOver={onPointerOver}>
        {nav}
      </PermDrawer>
    )
}

SideNav.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  onPointerOver: PropTypes.func.isRequired,
}

export default SideNav
