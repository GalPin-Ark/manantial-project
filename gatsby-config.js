module.exports = {
  siteMetadata: {
    title: `GEM Tours`,
    description: `This project is supported by Unozero Code SA de CV.`,
    author: `UnoZero Code SA de CV`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'page2',
        link:'/page-2'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gem-tours`,
        short_name: `gem-tours`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },

  ],
}
