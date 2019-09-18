import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  centered: {
    margin: '0 auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tag3: {
    maxWidth: '550px',
  },
}))

export default function Hero() {
  const classes = useStyles()
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down(theme.breakpoints.shrinkDonate))

  const tag1 = 'Organizing door to door'
  const tag2 = 'block by block'
  const tag3 = 'Connecting residents to one another to build grassroots power.'

  return (
    <div className={classes.container}>
      <div className={classes.centered}>
        <Typography variant="h4">
          <Box textAlign={smallScreen ? 'center' : 'right'} fontWeight="fontWeightBold" textOverflow="clip">
            {tag1}
          </Box>
        </Typography>
        <Typography variant="h4">
          <Box textAlign={smallScreen ? 'center' : 'right'} fontWeight="fontWeightBold" textOverflow="clip">
            {tag2}
          </Box>
        </Typography>
      </div>
      <div className={clsx(classes.centered, classes.tag3)}>
        <Typography variant="h5">
          <Box mt={smallScreen ? 3 : 5} textAlign="center" fontWeight="fontWeightBold" textOverflow="clip">
            {tag3}
          </Box>
        </Typography>
      </div>
    </div>
  )
}
