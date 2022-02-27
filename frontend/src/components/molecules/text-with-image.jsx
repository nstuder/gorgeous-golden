import React from "react"
import { Markdown } from "../molecules/markdown"

export const TextWithImage = ({ image, isRight, text }) => (
  <div className='grid lg:grid-cols-2'>
    {isRight ? (
      <>
        <Markdown>{text}</Markdown>
        <img
          className='lg:m-3 shadow-lg'
          loading='lazy'
          src={image.url}
          alt={image.alternativeText || "Image"}
        />
      </>
    ) : (
      <>
        <img
          className='lg:m-3 shadow-lg'
          loading='lazy'
          src={image.url}
          alt={image.alternativeText || "Image"}
        />
        <Markdown>{text}</Markdown>
      </>
    )}
  </div>
)
