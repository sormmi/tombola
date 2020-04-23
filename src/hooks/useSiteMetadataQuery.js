import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadataQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          titleLong
          games
          description
        }
      }
    }
  `)
  return data.site.siteMetadata;
}
