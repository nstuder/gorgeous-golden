import React from "react";
import { Link } from "gatsby";

export const NavLink = (props) => {
  return (
    <Link
      to={props.item.href}
      className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      activeClassName="bg-gray-900"
      activeStyle={{
        color: "white",
      }}
    >
      {props.item.name}
    </Link>
  );
};
