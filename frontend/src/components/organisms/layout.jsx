import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import Logo from "../../images/logos/Logo.svg"
import { Headline } from "../atoms/Headline"
import { GatsbyImage } from "gatsby-plugin-image"

const Layout = ({ children, title, image, logo, full, center = true }) => {
  return (
    <>
      <Nav />
      <header
        className={
          image
            ? "grid sm:grid-cols-2 grid-cols-1 relative"
            : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative"
        }
      >
        <img src={logo ? logo : Logo} alt='Logo' loading='lazy' />
        {title ? (
          <div
            className={`flex justify-center items-center md:col-span-2 lg:col-span-3 
              ${center ? " lg:absolute w-full h-full" : ""}`}
          >
            <Headline>{title}</Headline>
          </div>
        ) : null}
        {image ? (
          <GatsbyImage
            className='max-h-screen'
            loading='lazy'
            alt={"Home"}
            image={image}
          />
        ) : null}
      </header>
      {image ? null : (
        <main
          className={`mx-auto min-h-screen my-5 ${
            full ? "" : "container p-1 md:p-5"
          }`}
        >
          {children}
        </main>
      )}
      <Footer />
    </>
  )
}

export default Layout
