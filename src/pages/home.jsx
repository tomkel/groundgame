import React from 'react'
import { styled } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Grow from '@material-ui/core/Grow'
import Fade from '@material-ui/core/Fade'
import Twitter from '../components/twitter'
import Instagram from '../components/instagram'
import DonateButton from '../components/donate-button'
import Hero from '../components/hero'
import la from '../images/la-bw.jpg'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateRows: 'minmax(0,4fr) minmax(0,3fr) minmax(0,1fr)',
    gridTemplateColumns: 'minmax(390px,2fr) minmax(205px,1fr)',
    gridTemplateAreas: [[
      '"hero twitter"',
      '"hero twitter"',
      '"donate twitter"',
    ]],
    [theme.breakpoints.down(theme.breakpoints.smallHome)]: {
      gridTemplateRows: '1fr',
      gridTemplateColumns: '1fr',
      gridTemplateAreas: [[
        '"hero"',
        '"twitter"',
        '"donate"',
      ]],
    },
    gridGap: theme.spacing(1),
    width: '100%',
    minWidth: '100%',
    height: '100%',
    overflowY: 'hidden',
  },
  twitter: {
    gridArea: 'twitter',
  },
  instagram: {
    gridArea: 'instagram',
  },
  donate: {
    gridArea: 'donate',
    justifySelf: 'center',
    // minWidth: '390px',
  },
  hero: {
    gridArea: 'hero',
  },
}))

const useImageStyles = makeStyles((theme) => ({
  imgContainer: {
    zIndex: '-1',
  },
}))

const BGImage = styled('div')({
  opacity: '0.5',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${la})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  /*
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transition-duration: ${props => `${props.transitionDuration}ms`};
    transition-property: opacity;
    transition-timing-function: ${props => props.transitionTimingFunction};
    */
})

function FadeInBGImage({ match }) {
  const classes = useImageStyles()

  // use a container so we don't apply opacity:1 directly to bgImage which
  // overwrites opacity:0.5
  // Fade applies opacity transition to its first child
  return (
    <Fade in={match && match.isExact} timeout={3000}>
      <div className={classes.imgContainer}>
        <BGImage />
      </div>
    </Fade>
  )
}

export default function Home({ match }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <FadeInBGImage match={match} />
      <Twitter className={classes.twitter} />
      <div className={classes.donate}>
        <Grow appear in={match && match.isExact} timeout={1250}>
          <div>
            <DonateButton />
          </div>
        </Grow>
      </div>
      <div className={classes.hero}>
        <Hero>
          <h1>Generic Startup Hype Headline</h1>
        </Hero>
      </div>
    </div>
  )
}
