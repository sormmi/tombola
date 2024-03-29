module.exports = {
  siteMetadata: {
    title: `omatombola`,
    titleLong: `omatombola arvontapalvelu`,
    games: 'jokeri, lotto, vikinglotto, eurojackpot, vakio',
    description: `Arvontapalvelu suosituille veikkauspeleille`,
    author: `@sormmi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/src/config`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {

      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `omatombola arvontapalvelu`,
        short_name: `omatombola`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Lato\:300,400,700,900`,
        ],
         display: 'swap',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
