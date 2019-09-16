import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  image: {
    height: '100%',
    width: '100%',
  },
}))

export default function Hero({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.image}>
      {children}
    </div>
  )
}
