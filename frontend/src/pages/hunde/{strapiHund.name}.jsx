import { graphql } from "gatsby"
import * as React from "react"
import { MainDogPicture } from "../../components/atoms/dog/main-dog-picture"
import Layout from "../../components/organisms/layout"
import ReactMarkdown from "react-markdown"
import Gallery from "../../components/organisms/gallery"
import { Pedigree } from "../../components/organisms/pedigree"
import Seo from "../../components/organisms/seo"

const DogPage = ({ data }) => {
  const dog = data.strapiHund
  return (
    <>
      <Seo
        title={`${dog.breedingName} (${dog.name})`}
        image={dog.image.url}
        description={dog.description}
      />
      <Layout title={dog.breedingName} full='true' center={false}>
        <div className='mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-20 container mx-auto'>
          <MainDogPicture
            className='mx-auto'
            image={dog.image.localFile.childImageSharp.gatsbyImageData}
            alt={dog.name}
          />
          <div>
            <h1 className='bold text-4xl mb-5 italic'>
              {dog.name}
            </h1>
            <ReactMarkdown className='prose max-w-none p-2'>
              {dog.description}
            </ReactMarkdown>
          </div>
        </div>
        <Pedigree pedigree={dog.pedigree} />
        {dog.tests ? (
          <div>
            <h3 className='text-4xl italic text-center my-8'>Prüfungen</h3>
            <ReactMarkdown className='prose max-w-none p-2'>
              {dog.tests}
            </ReactMarkdown>
          </div>
        ) : null}
        {dog.gallery ? <Gallery images={dog.gallery} /> : ""}
      </Layout>
    </>
  )
}

export const query = graphql`
  query DogPageQuery($id: String) {
    strapiHund(id: { eq: $id }) {
      breedingName
      name
      description
      tests
      gallery {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      image {
        url
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
    }
  }
`

export default DogPage
