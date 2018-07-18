module.exports = {
  siteMetadata: {
    title: 'Idea Blog',
    description: 'I write about web development, programming, and more...',
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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                sh: 'bash',
              },
            },
          },
        ],
      },
    },
  ],
}
