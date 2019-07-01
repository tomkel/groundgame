import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: 'purple' }}>Hi peoples</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <img src="https://source.unsplash.com/random/400x200" alt="" style={{ display: 'block' }} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
