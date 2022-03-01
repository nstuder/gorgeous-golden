import React from "react"
import { Dropdown } from "./dropdown"
import { NavLink } from "../../atoms/nav/nav-link"

export const NavList = ({ items }) => {
  return (
    <div className='hidden sm:block sm:ml-6'>
      <div className='flex space-x-4'>
        {items.map((item) => {
          if (item.content) {
            return <Dropdown data={item}/>
          } else {
            return <NavLink key={item.name} item={item}></NavLink>
          }
        })}
      </div>
    </div>
  )
}
