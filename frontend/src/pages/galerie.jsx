import * as React from "react"
import Layout from "../components/organisms/layout"
import { graphql } from "gatsby"
import Seo from "../components/organisms/seo"
import MediaList from "../components/molecules/media-list"

const GaleriePage = ({ data }) => {
  const galerieData = data.allStrapiGalerie.edges

  return (
    <>
      <Seo title={"Galerie"} />
      <Layout title={"Galerie"} full={true}>
        {galerieData.map(({node}) => <MediaList list={node.images}/>)}
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
            mime
            localFile {
              publicURL
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
