import React from "react"
import { Menu } from "@headlessui/react"
import { Link } from "gatsby"

export const DropdownLink = ({ baseUrl, item }) => (
  <Menu.Item>
    <Link
      to={baseUrl + item.href}
      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white'
      activeClassName='bg-gray-900'
      activeStyle={{
        color: "white",
      }}
    >
      {item.name}
    </Link>
  </Menu.Item>
)
