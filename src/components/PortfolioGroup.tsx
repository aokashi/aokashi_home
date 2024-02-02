import React, { PropsWithChildren } from "react"
import PropTypes from "prop-types"

import { Box, SimpleGrid, Text } from "@chakra-ui/react"

const PortfolioGrid = ({ children }) =>
  <SimpleGrid columns={[1, 1, 2, 2, 2, 4]} spacingX={[0, 0, 12]} spacingY={4} my={8}>
    {children}
  </SimpleGrid>

type Props = PropsWithChildren<{
  seasonId: string,
  name: string,
  descriptionTitle?: string,
  description: string,
}>

const PortfolioGroup = ({ seasonId, name, descriptionTitle, description, children }: Props) => (
  <>
    <div id={seasonId}></div>
    <SimpleGrid columns={[1, 1, 2]} spacingX={[0, 0, 12]}>
      <Box><Text fontSize="xl" fontWeight="bold">{name}</Text></Box>
      {description &&
        <Box>
          {descriptionTitle &&
            <Text fontSize="lg" fontWeight="bold">{descriptionTitle}</Text>
          }
          {description.split("\n").map((line, lineIndex) =>
            <p key={lineIndex}>{line}</p>
          )}
        </Box>
      }
    </SimpleGrid>
    <PortfolioGrid>
      {children}
    </PortfolioGrid>
  </>
)

PortfolioGroup.propTypes = {
  seasonId: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
}

export default PortfolioGroup
