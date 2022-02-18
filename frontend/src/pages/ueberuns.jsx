import * as React from "react"
import Layout from "../components/organisms/layout"
import { graphql } from "gatsby"
import { Markdown } from "../components/molecules/markdown"
import Seo from "../components/organisms/seo"

const UsPage = ({ data }) => {
  const usData = data.strapiUns

  return (
    <>
      <Seo title={"Über Uns"} />
      <Layout title={"Über Uns"}>
        <Markdown>{usData.text}</Markdown>
      </Layout>
    </>
  )
}

export const query = graphql`
  query UsPageQuery {
    strapiUns {
      text
    }
  }
`

export default UsPage
