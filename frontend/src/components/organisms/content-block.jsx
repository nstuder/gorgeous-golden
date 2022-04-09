import React from "react"
import MediaList from "../molecules/media-list"
import { Markdown } from "../molecules/markdown"
import { TextWithImage } from "../molecules/text-with-image"
import { Pedigree } from "./pedigree"

export const ContentBlock = ({ content, reverse=false }) => {
  if(reverse) {
    content = content.reverse();
  }

  return <>
    {content.map((item) => {
      switch (item.strapi_component) {
        case "layout.text":
          return <Markdown>{item.content}</Markdown>
        case "layout.text-with-image":
          return (
            <TextWithImage
              text={item.text}
              isRight={item.isRight}
              image={item.image}
            />
          )
        case "layout.images":
          return <MediaList list={item.images} />
          case "dogs.pedigree":
            return <Pedigree pedigree={item}/>
        default:
          return <p>No Component Found</p>
      }
    })}
  </>
}
