import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import FeedbackIcon from '@material-ui/icons/Feedback'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}))

export default function DonateButton() {
  const classes = useStyles()
  const smallText = useMediaQuery((theme) => theme.breakpoints.down(theme.breakpoints.shrinkDonate))
  const text = smallText ? 'Donate' : 'Donate to Ground Game'

  return (
    <Fab color="primary" size="large" variant="extended" aria-label="donate" className={classes.fab} href="https://secure.actblue.com/donate/ggla">
      <FeedbackIcon className={classes.extendedIcon} />
      <Typography variant="h6"><b>{text}</b></Typography>
    </Fab>
  )
}
