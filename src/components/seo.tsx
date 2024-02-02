/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  description?: string,
  image?: string,
  title: string
}

const SEO = ({ description, image, title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            openGraphImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.openGraphImage
  const metaImageUrl = site.siteMetadata.siteUrl + metaImage
  const metaTitle = title === site.siteMetadata.title ? site.siteMetadata.title : `${title} - ${site.siteMetadata.title}`

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageUrl} />
    </>
  )
}

SEO.defaultProps = {
  description: ``,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
