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
      <div class="main-header">
        <div class="container mx-auto">
          <img src={Logo} alt={data.site.siteMetadata.title}></img>
        </div>
      </div>
      <div class="main-menu">
        <div class="container mx-auto">
        </div>
      </div>
      <div class="main-content">
        <div class="container mx-auto">
          {children}
        </div>
      </div>
    </>
  )
}

export default IndexLayout
