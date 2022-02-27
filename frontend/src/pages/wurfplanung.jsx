import * as React from "react"
import Layout from "../components/organisms/layout"
import { graphql } from "gatsby"
import Seo from "../components/organisms/seo"
import { ContenBlock } from "../components/organisms/content-block"

const PlanPage = ({ data }) => {
  const planData = data.strapiWurfplanung

  return (
    <>
      <Seo title={"Wurfplanung"} />
      <Layout title={"Wurfplanung"}>
        <ContenBlock content={planData.content}/>
      </Layout>
    </>
  )
}

export default PlanPage

export const query = graphql`
  query PlanPageQuery {
    strapiWurfplanung {
      content
    }
  }
`
