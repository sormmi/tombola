import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadataQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          titleLong
        }
      }
    }
  `)
  return data.site.siteMetadata;
}
