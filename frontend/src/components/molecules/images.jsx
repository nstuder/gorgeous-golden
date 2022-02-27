import React from "react"

const Images = ({ images }) => {
  return (
    <div className='flex flex-wrap items-center'>
      {images.map((image) => (
        <img
          className='p-2 mx-auto shadow-lg xl:w-1/3 lg:w-1/2 w-full '
          loading='lazy'
          src={image.url}
          alt={image.alternativeText || "Image"}
        />
      ))}
    </div>
  )
}

export default Images
