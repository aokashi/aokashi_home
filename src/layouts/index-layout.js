import React from "react"
import Logo from "../images/ah-logo.png"
import { useStaticQuery, graphql } from "gatsby"

const IndexLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <div className="main-header">
        <div className="container mx-auto">
          <img src={Logo} alt={data.site.siteMetadata.title}></img>
        </div>
      </div>
      <div className="main-menu">
        <div className="container mx-auto">
        </div>
      </div>
      <div className="main-content">
        <div className="container mx-auto">
          {children}
        </div>
      </div>
    </>
  )
}

export default IndexLayout
