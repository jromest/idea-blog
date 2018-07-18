module.exports = {
  siteMetadata: {
    title: 'Idea Blog',
    description: 'I write about programming, javascript and more...',
  },
  pathPrefix: '/idea-blog',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
}
