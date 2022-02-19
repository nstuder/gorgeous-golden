import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      strapiFooter {
        Copyright
      }
      allStrapiClubs {
        edges {
          node {
            name
            link
            image {
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
      <div
        className='flex flex-wrap justify-evenly items-center bg-gray-400 px-2 sm:px-6 lg:px-8 p-5 text-black'
      >
        {data.allStrapiClubs.edges.map(({ node: club }) => (
          <a href={club.link}>
            <GatsbyImage
              className='lg:w-32 md:w-24 w-16'
              loading='lazy'
              alt={club.name}
              image={club.image.localFile.childImageSharp.gatsbyImageData}
            />
          </a>
        ))}
      </div>
      <div className='bg-gray-500 p-2 text-center text-white'>
        2022 Copyright: {data.strapiFooter.Copyright}
      </div>
    </footer>
  )
}

export default Footer
