import * as React from "react"

export const Headline = ({ children, className }) => (
  <h1
    className={`text-5xl lg:text-7xl text-center mt-4 text-gray-700 ${className}`}
    style={{ fontFamily: "Quantin" }}
  >
    {children}
  </h1>
)
