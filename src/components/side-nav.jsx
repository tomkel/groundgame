import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import NavContents from './nav-contents'

const drawerWidth = 340
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
    //[theme.breakpoints.up('sm')]: {
    //  width: theme.spacing(9),
    //},
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    height: theme.spacing(7),
    //...theme.mixins.toolbar,
  },
}))

function SideNav(props) {
  const classes = useStyles()
  const { isDrawerOpen: open, onPointerOver } = props

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
      open={open}
      onPointerOver={onPointerOver}
    >
      <div className={classes.toolbar} />
      <NavContents />
    </Drawer>
  )
}

SideNav.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  onPointerOver: PropTypes.func.isRequired,
}

export default SideNav
