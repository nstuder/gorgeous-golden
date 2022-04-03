import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { SocialMediaLink } from "../atoms/SocialMediaLink"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      strapiFooter {
        Copyright
        socialMedia
      }
      allStrapiClubs {
        edges {
          node {
            name
            link
            image {
              height
              width
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <footer>
      <div className='flex flex-wrap justify-evenly items-center bg-gray-400 px-2 sm:px-6 lg:px-8 p-5 text-black'>
        {data.allStrapiClubs.edges.map(({ node: club }) => (
          <a href={club.link}>
            <GatsbyImage
              className='lg:w-32 md:w-24 w-16'
              loading='lazy'
              alt={club.name}
              width={club.image.width}
              height={club.image.height}
              image={club.image.localFile.childImageSharp.gatsbyImageData}
            />
          </a>
        ))}
      </div>
      <div className='bg-gray-500 p-2 text-center text-white flex justify-center flex-wrap'>
        {data.strapiFooter.socialMedia.map((socialMedia) => (
          <div className="h-6 w-auto mx-3">
            <SocialMediaLink socialMedia={socialMedia} />
          </div>
        ))}
        <div>2022 Copyright: {data.strapiFooter.Copyright}</div>
      </div>
    </footer>
  )
}

export default Footer
