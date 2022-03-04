import * as React from "react"
import Layout from "../components/organisms/layout"
import { graphql } from "gatsby"
import Seo from "../components/organisms/seo"
import Images from "../components/molecules/images"

const GaleriePage = ({ data }) => {
  const galerieData = data.allStrapiGalerie.edges

  return (
    <>
      <Seo title={"Galerie"} />
      <Layout title={"Galerie"} full={true}>
        {galerieData.map(({node}) => <Images images={node.images}/>)}
      </Layout>
    </>
  )
}

export const query = graphql`
  query GaleriePageQuery {
    allStrapiGalerie {
      edges {
        node {
          name
          images {
            width
            height
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

export default GaleriePage
