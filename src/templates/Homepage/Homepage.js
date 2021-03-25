import * as React from "react"

import Layout from "../../layouts"
import SEO from "../../layouts/common/seo"
import { Hero } from "./components"

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}

export default Homepage
