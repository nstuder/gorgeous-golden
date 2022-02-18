import * as React from "react"
import Layout from "../components/organisms/layout"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import { LocalBusiness } from "../components/organisms/localBusiness"
import Seo from "../components/organisms/seo"

const ContactPage = ({ data }) => {
  const contactData = data.strapiKontakt

  return (
    <>
      <Seo title={'Kontakt'}/>
      <LocalBusiness/>
      <Layout title={"Kontakt"}>
        <ReactMarkdown className='prose max-w-none'>
          {contactData.text}
        </ReactMarkdown>
        {/* <Map/> */}
      </Layout>
    </>
  )
}

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    strapiKontakt {
      text
    }
  }
`
