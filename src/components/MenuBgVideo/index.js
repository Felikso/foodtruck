import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Video } from 'gatsby-video'
import poster_image from './poster.png'

const MenuBgVideo = props => {
  const videos = props.data.file.childVideoFfmpeg

  return (
    <Video
      poster={poster_image}
      autoPlay
      muted
      loop
      sources={[videos.webm, videos.mp4]}
    />
  )
}