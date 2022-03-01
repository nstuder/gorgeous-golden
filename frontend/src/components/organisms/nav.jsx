import React from "react"
import { Disclosure } from "@headlessui/react"
import MobileMenuButton from "../atoms/nav/mobile-menu-button"
import { NavList } from "../molecules/nav/nav-list"
import { MobileNavList } from "../molecules/nav/mobile-nav-list"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Aktuelles", href: "/aktuelles/", current: false },
  { name: "Über Uns", href: "/ueberuns/", current: false },
  { name: "Hunde", href: "/hunde/", current: false },
  {
    name: "Zucht",
    href: "/zucht",
    content: [{ name: "Aufzucht", href: "/aufzucht/", current: false }],
  },
  // { name: "Würfe", href: "/wuerfe/", current: false },
  { name: "Wurfplanung", href: "/wurfplanung/", current: false },
  { name: "Kontakt", href: "/kontakt/", current: false },
]

const Nav = () => {
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
                <NavList items={navigation} />
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
