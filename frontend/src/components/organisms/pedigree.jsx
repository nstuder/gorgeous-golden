import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export const Pedigree = ({ pedigree }) => (
  <>
    <h3 className='text-4xl italic text-center my-8'>Ahnentafel</h3>
    <div className='grid md:grid-cols-6 gap-5'>
      {pedigree.motherImg && pedigree.fatherImg ? (
        <div className='md:col-span-2'>
          <div className='md:p-5 p-1'>
            {pedigree.fatherImg.localFile ? (
              <GatsbyImage
                className='shadow-lg'
                image={
                  pedigree.fatherImg.localFile.childImageSharp.gatsbyImageData
                }
                alt={pedigree.father}
                loading='lazy'
              />
            ) : (
              <img
                className='shadow-lg'
                loading='lazy'
                src={pedigree.fatherImg.url}
                alt={pedigree.mother || "Image"}
              />
            )}
            <h3 className='italic text-2xl text-center mt-2'>
              {pedigree.father}
            </h3>
          </div>
          <div className='md:p-5 p-1'>
            {pedigree.motherImg.localFile ? (
              <GatsbyImage
                className='shadow-lg'
                image={
                  pedigree.motherImg.localFile.childImageSharp.gatsbyImageData
                }
                alt={pedigree.mother}
                loading='lazy'
              />
            ) : (
              <img
                className='shadow-lg'
                loading='lazy'
                src={pedigree.motherImg.url}
                alt={pedigree.mother || "Image"}
              />
            )}
            <h3 className='italic text-2xl text-center mt-2'>
              {pedigree.mother}
            </h3>
          </div>
        </div>
      ) : null}
      <div className='md:col-span-4 md:row-span-2'>
        <table className='min-w-full divide-y divide-gray-200 h-full text-center mt-3'>
          <thead>
            <tr>
              <th>Vater</th>
              <th>Großeltern</th>
              <th>Urgroßeltern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='align-middle' rowspan='4'>
                {pedigree.father}
              </td>
              <td className='align-middle' rowspan='2'>
                {pedigree.fatherFather}
              </td>
              <td>{pedigree.fatherFatherFather}</td>
            </tr>
            <tr>
              <td>{pedigree.fatherFatherMother}</td>
            </tr>
            <tr>
              <td className='align-middle' rowspan='2'>
                {pedigree.fatherMother}
              </td>
              <td>{pedigree.fatherMotherFather}</td>
            </tr>
            <tr>
              <td>{pedigree.fatherMotherMother}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Mutter</th>
              <th>Großeltern</th>
              <th>Urgroßeltern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='align-middle' rowspan='4'>
                {pedigree.mother}
              </td>
              <td className='align-middle' rowspan='2'>
                {pedigree.motherFather}
              </td>
              <td>{pedigree.motherFatherFather}</td>
            </tr>
            <tr>
              <td>{pedigree.motherFatherMother}</td>
            </tr>
            <tr>
              <td className='align-middle' rowspan='2'>
                {pedigree.motherMother}
              </td>
              <td>{pedigree.motherMotherFather}</td>
            </tr>
            <tr>
              <td>{pedigree.motherMotherMother}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
)
