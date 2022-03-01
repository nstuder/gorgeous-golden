import React from "react"

const Images = ({ images }) => {
  return (
    <div className='flex flex-wrap items-center my-2'>
      {images.map((image) => (
        <div className="mx-auto xl:w-1/3 lg:w-1/2 w-full p-1">
        <img
          className='shadow-lg'
          loading='lazy'
          src={image.url}
          alt={image.alternativeText || "Image"}
        />
        </div>
      ))}
    </div>
  )
}

export default Images
