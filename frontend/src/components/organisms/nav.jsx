import React from "react"
import { Disclosure } from "@headlessui/react"
import MobileMenuButton from "../atoms/nav/mobile-menu-button"
import { useStaticQuery, graphql } from "gatsby"
import { NavList } from "../molecules/nav/nav-list"
import { MobileNavList } from "../molecules/nav/mobile-nav-list"
import { SocialMediaLink } from "../atoms/SocialMediaLink"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Aktuelles", href: "/aktuelles/", current: false },
  { name: "Über Uns", href: "/ueberuns/", current: false },
  { name: "Hunde", href: "/hunde/", current: false },
  {
    name: "Zucht",
    href: "/zucht/",
    content: [],
  },
  { name: "Wurfplanung", href: "/wurfplanung/", current: false },
  {
    name: "Würfe",
    href: "/wuerfe/",
    content: [],
  },
  { name: "Galerie", href: "/galerie/", current: false },
  { name: "Kontakt", href: "/kontakt/", current: false },
]

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allStrapiZucht {
        edges {
          node {
            name
          }
        }
      }
      allStrapiWurfs {
        edges {
          node {
            name
          }
        }
      }
      strapiFooter {
        socialMedia
      }
    }
  `)
  
  navigation[4].content = data.allStrapiZucht.edges.map(({ node: item }) => ({
    name: item.name,
    href: item.name.toLowerCase() + "/",
  }))

  navigation[6].content = data.allStrapiWurfs.edges.map(({ node: item }) => ({
    name: item.name,
    href: item.name.toLowerCase() + "/",
  }))

  return (
    <Disclosure
      as='nav'
      className='bg-gray-400 shadow-md italic font-light sticky top-0 z-50'
    >
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <MobileMenuButton open={open} />
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch'>
                {/* <NavBrand>Gorgeous Golden</NavBrand> */}
                <NavList items={navigation} >
                {data.strapiFooter.socialMedia.map((socialMedia) => (
                  <div className='w-5 py-2'>
                    <SocialMediaLink socialMedia={socialMedia} />
                  </div>
                ))}
                </NavList>
              </div>
            </div>
          </div>

          <MobileNavList items={navigation} />
        </>
      )}
    </Disclosure>
  )
}

export default Nav
