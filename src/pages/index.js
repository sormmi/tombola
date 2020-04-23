import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useSiteMetadataQuery } from "hooks/useSiteMetadataQuery"

const IndexPage = () => {

  const site = useSiteMetadataQuery();

  return (
  <Layout page="home" title={site.title} titleLong={site.titleLong} description={site.games}>
    <SEO title="Home" />
  </Layout>
)}

export default IndexPage
