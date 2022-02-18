import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang = "de", meta = {}, title, image }) {
  const data = useStaticQuery(
    graphql`
      query {
        strapiMetadata {
          defaultTitle
          defaultDescription
          author
          keywords
        }
      }
    `
  )
  const { defaultTitle, defaultDescription, author, keywords } =
    data.strapiMetadata

  const metaDescription = description || defaultDescription
  const metaKeywords = keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={""}
      meta={[
        {
          name: "author",
          content: author,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          name: `robots`,
          content: "all",
        },
        {
          property: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

export default Seo
