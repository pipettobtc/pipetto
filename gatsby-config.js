/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/pipetto",
  siteMetadata: {
    title: `pipetto`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `static`,
      path: `${__dirname}/static/`,
    },
  },
]
};