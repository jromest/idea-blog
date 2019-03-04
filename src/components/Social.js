import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TwitterIcon from './Icons/twitter'
import GithubIcon from './Icons/github'
import CodepenIcon from './Icons/codepen'

const Social = ({ color }) => (
  <StaticQuery
    query={graphql`
      query siteSocialQuery {
        site {
          siteMetadata {
            twitter
            github
            codepen
          }
        }
      }
    `}
  >
    {data => {
      const { twitter, github, codepen } = data.site.siteMetadata
      return (
        <div className="social">
          <a
            aria-label="twitter"
            className="social-icon"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon color={color} />
          </a>
          <a
            aria-label="github"
            className="social-icon"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon color={color} />
          </a>
          <a
            aria-label="codepen"
            className="social-icon"
            href={codepen}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodepenIcon color={color} />
          </a>
        </div>
      )
    }}
  </StaticQuery>
)

export default Social
