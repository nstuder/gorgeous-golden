import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const MainDogPicture = ({ image, alt = "Image" }) => (
  <div className='relative m-8'>
    <div className='bg-gray-500 block w-full h-full transform rotate-6 absolute top-0 left-0 shadow-lg'></div>
    <GatsbyImage
      className='block w-full h-full relative top-0 left-0 z-10 shadow-sm'
      loading='lazy'
      alt={alt}
      width={image.width}
      height={image.height}
      image={image.localFile.childImageSharp.gatsbyImageData}
    />
  </div>
)
