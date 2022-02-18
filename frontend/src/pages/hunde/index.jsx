import { graphql } from "gatsby"
import * as React from "react"
import { MainDogPicture } from "../../components/atoms/dog/main-dog-picture"
import Layout from "../../components/organisms/layout"
import Link from "gatsby-link"
import Seo from "../../components/organisms/seo"

const DogsPage = ({ data }) => {
  const dogs = data.allStrapiHund.edges
  return (
    <>
      <Seo title={"Hunde"} />
      <Layout title={"Hunde"}>
        <div className='mt-5 flex justify-evenly sm:flex-row flex-wrap'>
          {dogs.map(({ node: dog }) => (
            <Link to={`/hunde/${dog.name.toLowerCase()}/`}>
              <MainDogPicture
                className='mx-auto'
                image={dog.image.localFile.childImageSharp.gatsbyImageData}
              />
              <h2
                className='text-4xl text-grey-700 text-center'
                style={{ fontFamily: "Quantin" }}
              >
                {dog.breedingName}
              </h2>
              <h3 className='text-2xl text-center italic font-light'>
                {dog.name}
              </h3>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query DogsPageQuery {
    allStrapiHund {
      edges {
        node {
          breedingName
          name
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
`

export default DogsPage
