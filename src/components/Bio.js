import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import avatarImg from '../assets/jrom-80x80.jpg'

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
          <img className="avatar" src={avatarImg} alt="Jerome Estiller" />
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
