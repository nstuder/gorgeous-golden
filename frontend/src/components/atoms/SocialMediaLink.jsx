import * as React from "react"

export const SocialMediaLink = ({socialMedia}) => (
  <a href={socialMedia.link} target='_blank' rel='noreferrer'>
    <img
      className="h-full w-full"
      alt={socialMedia.name}
      src={socialMedia.logo.url}
      width={socialMedia.logo.width}
      height={socialMedia.logo.height}
    />
  </a>
)
