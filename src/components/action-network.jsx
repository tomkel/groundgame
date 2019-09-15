import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// https://actionnetwork.org/forms/join-ground-game-los-angeles/

const useStyles = makeStyles((theme) => ({
  anContainer: {
    width: '100%',
    // margin: theme.spacing(1),
  },
  '@global': {
    '.entry-title, #action_info, #edit_d_sharing_opts': {
      display: 'none !important',
    },
  },
}))

export default function ActionNetwork() {
  const classes = useStyles()
  return (
    <div id="can-form-area-join-ground-game-los-angeles" className={classes.anContainer} />
  )
}
