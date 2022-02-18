import * as React from "react"
import Layout from "../components/organisms/layout"
import { Markdown } from "../components/molecules/markdown"
import { graphql } from "gatsby"
import Seo from "../components/organisms/seo"

const PlanPage = ({ data }) => {
  const planData = data.strapiWurfplanung

  return (
    <>
      <Seo title={"Wurfplanung"} />
      <Layout title={"Wurfplanung"}>
        <Markdown>{planData.text}</Markdown>
      </Layout>
    </>
  )
}

export default PlanPage

export const query = graphql`
  query PlanPageQuery {
    strapiWurfplanung {
      text
    }
  }
`
