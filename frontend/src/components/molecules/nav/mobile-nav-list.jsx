import React from "react";
import { Disclosure } from "@headlessui/react";
import { MobileNavLink } from "../../atoms/nav/mobile-nav-link";

export const MobileNavList = ({ items }) => (
  <Disclosure.Panel className="sm:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {items.map((item) => (
        <MobileNavLink key={item.name} item={item}></MobileNavLink>
      ))}
    </div>
  </Disclosure.Panel>
);
