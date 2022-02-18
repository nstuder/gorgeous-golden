import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "gatsby";

export const MobileNavLink = (props) => (
  <Disclosure.Button as="a">
    <Link
      to={props.item.href}
      className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      activeClassName="bg-gray-900"
      activeStyle={{
        color: "white",
      }}
      aria-current={props.item.current ? "page" : undefined}
    >
      {props.item.name}
    </Link>
  </Disclosure.Button>
);
