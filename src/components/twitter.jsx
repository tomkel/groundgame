import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Twitter(props) {
  return (
    <div {...props} >
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
