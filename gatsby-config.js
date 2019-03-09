module.exports = {
  siteMetadata: {
    title: 'Idea Blog',
    author: 'Jerome Estiller',
    description: 'I write about web development, programming, and more...',
    siteUrl: 'jeromestiller.com',
    twitterHandle: '@jrom_est',
    twitter: 'https://twitter.com/jrom_est',
    github: 'https://github.com/jromest',
    codepen: 'https://codepen.io/jromest/',
  },
  pathPrefix: '/idea-blog',
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./node_modules/'],
      },
    },
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
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
  ],
}
