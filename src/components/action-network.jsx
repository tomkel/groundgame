import React, { useEffect, useState } from 'react' 

const url = `https://actionnetwork.org/oembed/?url=${encodeURIComponent('https://actionnetwork.org/forms/join-ground-game-los-angeles/')}`

function getEmbedHTML() {
  return fetch(url)
    .then(r => r.json())
    .then(({ html }) => ({ __html: html }))
}

export default function ActionNetwork() {
  const [html, setHTML] = useState()

  useEffect(() => {
    getEmbedHTML().then(setHTML)
  }, [])

  return (
    <div dangerouslySetInnerHTML={html} />
  )
}

