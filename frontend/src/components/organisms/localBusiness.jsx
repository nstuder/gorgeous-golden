import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const LocalBusiness = () => {
  const data = useStaticQuery(
    graphql`
      query {
        strapiMetadata {
          structuredData
        }
      }
    `
  )
  const { structuredData } = data.strapiMetadata

  return (
    <Helmet>
      <script type='application/ld+json'>{structuredData}</script>
    </Helmet>
  )
}
