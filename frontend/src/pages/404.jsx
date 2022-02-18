import { Link } from "gatsby/cache-dir/commonjs/gatsby-browser-entry"
import * as React from "react"
import Layout from "../components/organisms/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <h1>Diese Seite konnte nicht gefunden werden</h1>
      <Link to="/">Hier gehts zurück zur Startseite</Link>
    </Layout>
  )
}

export default NotFoundPage
