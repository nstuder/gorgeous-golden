import React from "react"
import { Markdown } from "../molecules/markdown"

export const TextWithImage = ({ image, isRight, text }) => (
  <div className='grid lg:grid-cols-2 gap-2'>
    {isRight ? (
      <>
        <Markdown>{text}</Markdown>
        <img
          className='shadow-lg'
          loading='lazy'
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alternativeText || "Image"}
        />
      </>
    ) : (
      <>
        <img
          className='shadow-lg'
          loading='lazy'
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alternativeText || "Image"}
        />
        <Markdown>{text}</Markdown>
      </>
    )}
  </div>
)
