import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/organisms/layout"
import Seo from "../../components/organisms/seo"
import { ContentBlock } from "../../components/organisms/content-block"
import { Pedigree } from "../../components/organisms/pedigree"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { MainDogPicture } from "../../components/atoms/dog/main-dog-picture"

const WurfPage = ({ data }) => {
  const wurf = data.strapiWurfs
  return (
    <>
      <Seo
        title={wurf.name}
        image={wurf.image.url}
        description={wurf.description}
      />
      <Layout title={wurf.name} full='true'>
        <div className='mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-20 mx-auto items-center'>
          <MainDogPicture
            className='mx-auto'
            image={wurf.image}
            alt={wurf.name}
          />
          <div>
            <ReactMarkdown className='prose max-w-none p-2'>
              {wurf.description}
            </ReactMarkdown>
          </div>
        </div>
        <Pedigree pedigree={wurf.pedigree} />
        <div className="container mx-auto">
          <ContentBlock content={wurf.content} reverse={false}/>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query WurfPageQuery($id: String) {
    strapiWurfs(id: { eq: $id }) {
      name
      description
      image {
        url
        width
        height
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      pedigree {
        father
        fatherFather
        fatherFatherFather
        fatherFatherMother
        fatherImg {
          width
          height
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        fatherMother
        fatherMotherFather
        fatherMotherMother
        mother
        motherFather
        motherFatherFather
        motherFatherMother
        motherImg {
          width
          height
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        motherMother
        motherMotherFather
        motherMotherMother
      }
      content
    }
  }
`

export default WurfPage
