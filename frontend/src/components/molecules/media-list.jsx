import { GatsbyImage } from "gatsby-plugin-image/dist/gatsby-image"
import React from "react"

const MediaList = ({ list }) => {
  return (
    <div className='flex flex-wrap items-center my-2'>
      {list.map((media) => (
        <div className='mx-auto xl:w-1/3 lg:w-1/2 w-full p-1'>
          {media.mime.includes("video") ? (
            <video controls="controls" loading="lazy"
             className='shadow-lg w-full'>
              <source src={media.localFile.publicURL} type={media.mime} />
              Your browser does not support the video tag.
            </video>
          ) : media.localFile ? (
            <GatsbyImage
              loading='lazy'
              className='shadow-lg'
              alt={media.alternativeText || "Image"}
              objectFit='contain'
              width={media.width}
              height={media.height}
              image={media.localFile.childImageSharp.gatsbyImageData}
            />
          ) : (
            <img
              className='shadow-lg'
              loading='lazy'
              src={media.url}
              width={media.width}
              height={media.height}
              alt={media.alternativeText || "Image"}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default MediaList
