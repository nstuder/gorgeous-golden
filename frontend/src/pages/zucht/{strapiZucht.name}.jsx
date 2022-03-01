import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/organisms/layout"
import Seo from "../../components/organisms/seo"
import { ContentBlock } from "../../components/organisms/content-block"

const ZuchtPage = ({ data }) => {
  const item = data.strapiZucht
  return (
    <>
      <Seo title={item.name} />
      <Layout title={item.name}>
        <ContentBlock content={item.content}/>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ZuchtPageQuery($id: String) {
    strapiZucht(id: { eq: $id }) {
      name
      content
    }
  }
`

export default ZuchtPage
