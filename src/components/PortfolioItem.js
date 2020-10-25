import React from "react"
import PropTypes from "prop-types"

import convertDate from "../utils/convertDate"
import Box from "./Box/Box"
import { Link } from "gatsby"

const PortfolioItem = ({ portfolioItem, slug }) => {
  return (
    <Box
      title={portfolioItem.title}
      link={slug}
      imagePath={portfolioItem.images ? portfolioItem.images[0].path : null}
      width={["half-tablet", "one-quarter-widescreen"]}
    >
      <div className="is-size-7">
        <time datatime={portfolioItem.date}>
          {convertDate(portfolioItem.date)}
        </time>
      </div>
      <div className="tags">
        {portfolioItem.tags.map((tag, tagIndex) => 
          <Link to={`/portfolio/tag/${tag}`} className="tag" key={tagIndex}>{tag}</Link>
        )}
      </div>
    </Box>
  )
}

PortfolioItem.propTypes = {
  portfolioItem: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.object,
      alt: PropTypes.string,
    })),
  }).isRequired,
  slug: PropTypes.string.isRequired,
}

export default PortfolioItem
