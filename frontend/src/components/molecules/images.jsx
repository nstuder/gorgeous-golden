import { GatsbyImage } from "gatsby-plugin-image/dist/gatsby-image"
import React from "react"

const Images = ({ images }) => {
  return (
    <div className='flex flex-wrap items-center my-2'>
      {images.map((image) => (
        <div className='mx-auto xl:w-1/3 lg:w-1/2 w-full p-1'>
          {image.localFile ? (
            <GatsbyImage
              loading='lazy'
              className='shadow-lg'
              alt={image.alternativeText || "Image"}
              objectFit='contain'
              width={image.width}
              height={image.height}
              image={image.localFile.childImageSharp.gatsbyImageData}
            />
          ) : (
            <img
              className='shadow-lg'
              loading='lazy'
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || "Image"}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Images
