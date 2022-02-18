import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/organisms/layout"
import Seo from "../components/organisms/seo"
import { LocalBusiness } from "../components/organisms/localBusiness"

const IndexPage = ({ data }) => {
  const homeData = data.strapiHome

  return (
    <>
      <Seo title={"Home"} image={homeData.image.url} />
      <LocalBusiness/>
      <Layout
        image={homeData.image.localFile.childImageSharp.gatsbyImageData}
        logo={homeData.logo.localFile.publicURL}
      >
        <div>Golden Retriver Zucht</div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query IndexPageQuery {
    strapiHome {
      image {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      logo {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
