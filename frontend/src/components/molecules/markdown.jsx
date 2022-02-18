import * as React from "react"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"
import { SingleImage } from "../atoms/SingleImage"

export const Markdown = ({ children }) => (
  <ReactMarkdown
    className='prose max-w-none'
    components={{
      a: ({ href, children }) => <Link to={href}>{children}</Link>,
      img: ({ src, alt }) => <SingleImage src={src} alt={alt} />,
    }}
  >
    {children}
  </ReactMarkdown>
)
