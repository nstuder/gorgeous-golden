import React from "react";

export const NavBrand = ({ children }) => {
  return (
    <div className="flex-shrink-0 flex items-center text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-extrabold">
      {children}
    </div>
  );
};
