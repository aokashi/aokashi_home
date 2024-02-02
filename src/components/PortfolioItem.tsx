import React from "react"
import PropTypes from "prop-types"

import convertDate from "../utils/convertDate"
import Box from "./Box/Box"
import { Link as GatsbyLink } from "gatsby"
import { HStack, Tag, Text } from "@chakra-ui/react"

type PortfolioItem = {
  title: string,
  path: string,
  date: string,
  tags: string[],
  images?: {
    path: string,
    alt: string
  }[],
}

type Props = {
  portfolioItem: PortfolioItem,
  slug: string
}

const PortfolioItem = ({ portfolioItem, slug }: Props) => {
  return (
    <Box
      title={portfolioItem.title}
      link={slug}
      imagePath={portfolioItem.images ? portfolioItem.images[0].path : null}
      headerContent={
        <Text fontSize="sm">
          <time dateTime={portfolioItem.date}>
            {convertDate(portfolioItem.date)}
          </time>
        </Text>
      }
    >
      <HStack wrap="wrap">
        {portfolioItem.tags.map((tag, tagIndex) => 
          <Tag as={GatsbyLink} to={`/portfolio/tag/${tag}`} key={tagIndex}>{tag}</Tag>
        )}
      </HStack>
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
