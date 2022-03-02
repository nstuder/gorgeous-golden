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
        image={homeData.image}
        logo={homeData.logo}
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
        height
        width
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      logo {
        height
        width
        localFile {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
