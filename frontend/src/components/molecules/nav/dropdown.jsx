import React from "react"
import { Menu, Transition, Fragment } from "@headlessui/react"
import { DropdownLink } from "../../atoms/nav/dropdown-link"

export const Dropdown = ({ data }) => (
  <Menu as='div' className='ml-3 relative'>
    <div>
      <Menu.Button className='text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium italic'>
        {data.name}
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <Menu.Items className='origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
        {data.content.map((item) => (
          <DropdownLink item={item} baseUrl={data.href}/>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
)
