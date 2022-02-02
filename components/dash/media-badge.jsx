/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Image from '@/components/Image'

export const MediaBadge = (props) => {
  switch (props.media[1].media) {
    case 'image':
      return <ImageBadge route={props} />
    case 'svg':
      return <SvgBadge />
    case 'video':
      return <VideoBadge />

    default:
      return <h1>No project match</h1>
  }
}

const ImageBadge = (props) => {
  console.log(props.route.media[0].tester)
  return (
    <div>
      <Image
        className="opacity-100"
        src={props.route.media[0].tester}
        alt="badge"
        width="300"
        height="300"
      />
    </div>
  )
}
const SvgBadge = (props) => {
  return (
    <div>
      <img
        src={props}
        alt="media badge opacity-100"
        className="block w-full h-full cursor-zoom-in"
      />
    </div>
  )
}
const VideoBadge = (props) => {
  return (
    <div>
      <video width="750" height="500" controls>
        <source src={props} type="video/mp4" />
      </video>
    </div>
  )
}
