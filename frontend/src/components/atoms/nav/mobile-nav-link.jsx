import React from "react"
import { Link } from "gatsby"

export const MobileNavLink = ({ item, baseUrl = "" }) => (
  <Link
    to={baseUrl + item.href}
    className='text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
    activeClassName='bg-gray-900'
    activeStyle={{
      color: "white",
    }}
  >
    {item.name}
  </Link>
)
