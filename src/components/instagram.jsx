import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

export default function Instagram(props) {
  return (
    <InstagramEmbed
      url='http://instagr.am/p/B1ckJirAd0B/'
      hideCaption={false}
      injectScript={false}
      {...props}
    />
  )
}
