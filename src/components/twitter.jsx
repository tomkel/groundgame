import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

// do all this so that when twitter is initialized with display: none it still
// gets the correct height. Because autoheight relies on offsetHeight which is
// not the right value when hidden
const useStyles = makeStyles((theme) => ({
  height: {
    height: '100%',
    '& > div': {
      height: '100%',
      '& > iframe': {
        height: '100% !important',
      },
    },
  },
}))

function Twitter({ className, match, ...props }) {
  const classes = useStyles()
  return (
    <div className={clsx(className, classes.height)}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="GroundGameLA"
        autoHeight
        theme="dark"
        noFooter
        noScrollbar
      />
    </div>
  )
}

export default Twitter
