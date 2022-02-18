import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Gallery = ({ images }) => {
  return (
    <div className='mt-8'>
      <h2 className='bold text-4xl mb-5 text-center italic'>Galerie</h2>

      <div className='grid items-center md:grid-cols-2 lg:grid-cols-3 bg-gray-400 md:p-5 md:gap-3 p-1 flex-wrap'>
        {images.map(
          ({
            localFile: {
              childImageSharp: { gatsbyImageData },
            },
          }) => (
            <div className='w-full '>
              <GatsbyImage
                loading='lazy'
                className='mx-auto max-w-screen-lg my-6 shadow-lg'
                alt={""}
                objectFit="contain"
                image={gatsbyImageData}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Gallery
