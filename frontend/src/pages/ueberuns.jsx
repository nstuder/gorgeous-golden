import * as React from "react"
import Layout from "../components/organisms/layout"
import { graphql } from "gatsby"
import Seo from "../components/organisms/seo"
import { ContentBlock } from "../components/organisms/content-block"

const UsPage = ({ data }) => {
  const usData = data.strapiUns

  return (
    <>
      <Seo title={"Über Uns"} />
      <Layout title={"Über Uns"}>
        <ContentBlock content={usData.content}/>
      </Layout>
    </>
  )
}

export const query = graphql`
  query UsPageQuery {
    strapiUns {
      content
    }
  }
`

export default UsPage
