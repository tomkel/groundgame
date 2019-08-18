import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hamburger from './hamburger'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    fontVariant: 'small-caps',
  },
}))

export default function Bar(props) {
  const classes = useStyles()
  const theme = useTheme()

  const { onHamburgerClick, isDrawerOpen } = props

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar style={{ paddingTop: theme.spacing(1) }}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onHamburgerClick}
          edge="start"
        >
          <Hamburger open={isDrawerOpen} />
        </IconButton>
        <Typography variant="h5" noWrap className={classes.title}>
            Ground Game LA
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Bar.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  onHamburgerClick: PropTypes.func.isRequired,
}
