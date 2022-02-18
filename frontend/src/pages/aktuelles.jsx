import * as React from "react"
import Layout from "../components/organisms/layout"
import { Markdown } from "../components/molecules/markdown"
import { graphql } from "gatsby"
import Seo from "../components/organisms/seo"

const NewsPage = ({ data }) => {
  const newsData = data.allStrapiAktuelles.edges
  return (
    <>
      <Seo title={"Aktuelles"} />
      <Layout title={"Aktuelles"}>
        {newsData.map(({ node: news }) => (
          <article className='my-4'>
            {/* <div className=' inline float-right'>{news.date}</div> */}
            <h2 className=' font-semibold text-2xl mb-3'>
              {news.date}
              {" - " + news.titel}
            </h2>
            <Markdown>{news.content}</Markdown>
          </article>
        ))}
      </Layout>
    </>
  )
}

export default NewsPage

export const query = graphql`
  query NewsPageQuery {
    allStrapiAktuelles(sort: { fields: date, order: DESC }) {
      edges {
        node {
          date(formatString: "DD.MM.YYYY")
          content
          titel
        }
      }
    }
  }
`
