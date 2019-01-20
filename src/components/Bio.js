import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Bio = () => (
  <StaticQuery
    query={graphql`
      query siteAuthor {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
  >
    {data => {
      const { author } = data.site.siteMetadata
      return (
        <div className="container container-main bio-container">
          <div className="avatar" src="" alt="Jerome Estiller" />
          <div className="bio">
            <hr className="bio-separator" />
            <h2>{author}</h2>
            <p>
              Getting great at something one day at a time.
              <br />
              Loves to learn and code.
            </p>
          </div>
        </div>
      )
    }}
  </StaticQuery>
)

export default Bio
