import React from "react"
import { Disclosure } from "@headlessui/react"
import { MobileNavLink } from "../../atoms/nav/mobile-nav-link"

export const MobileNavList = ({ items }) => (
  <Disclosure.Panel className='sm:hidden'>
    <div className='px-2 pt-2 pb-3 space-y-1'>
      {items.map((item) => {
        if (item.content) {
          return (
            <Disclosure>
              <Disclosure.Button
                as='a'
                className='text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                {item.name}
              </Disclosure.Button>
              <Disclosure.Panel className='text-gray-500 pl-3'>
                {item.content.map((i) => (
                  <MobileNavLink
                    key={i.name}
                    item={i}
                    baseUrl={item.href}
                  ></MobileNavLink>
                ))}
              </Disclosure.Panel>
            </Disclosure>
          )
        } else {
          return <MobileNavLink key={item.name} item={item}></MobileNavLink>
        }
      })}
    </div>
  </Disclosure.Panel>
)
