import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const SingleImage = ({ image, alt = "Image", src }) =>
  src ? (
    <img
      src={src}
      alt={image}
      loading='lazy'
      className='mx-auto lg:max-w-screen-md my-6 shadow-lg'
    />
  ) : (
    <GatsbyImage
      className='mx-auto max-w-screen-lg my-6 shadow-lg'
      loading='lazy'
      alt={alt}
      image={image}
    />
  )
