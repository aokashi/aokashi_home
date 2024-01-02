import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const TableOfContents = ({ body }) => {
  if (!body.items) {
    return null;
  }
  return (
    <Box as="aside" p={4}>
      <Heading as="h2" size="sm" className="menu-label"><FontAwesomeIcon icon="list" /> 目次</Heading>
      <List variant="tableOfContents">
        {body.items.map((item, index) => (
          <ListItem key={index}><a href={item.url}>{item.title}</a></ListItem>
        ))}
      </List>
    </Box>
  )
}

/**
 * プロパティ body は MDX から出力される目次のオブジェクトです。
 */
TableOfContents.propTypes = {
  body: PropTypes.object,
}

export default TableOfContents
