import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Twitter from '../components/twitter'
import Instagram from '../components/instagram'
import DonateButton from '../components/donate-button'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateRows: '4fr 3fr 1fr',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateAreas: [[
      '"hero twitter"',
      '"hero twitter"',
      '"donate twitter"',
    ]],
    gridGap: theme.spacing(1),
    width: '100%',
    height: '100%',
  },
  twitter: {
    gridArea: 'twitter',
  },
  instagram: {
    gridArea: 'instagram',
  },
  donate: {
    gridArea: 'donate',
  },
  hero: {
    gridArea: 'hero',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Twitter className={classes.twitter} />
      <div className={classes.donate}>
        <Zoom in={true} timeout={5000} style={{ transitionDelay: '0ms' }}>
          <DonateButton/>
        </Zoom>
      </div>
      <div className={classes.hero}>
      </div>
    </div>
  )
}
