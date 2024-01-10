import React from "react"
import PropTypes from "prop-types"

/**
 * 親要素が PortfolioList の場合にスタイルシートを付与したいため、CSSはPortfolioListと共用
 * @todo TypeScript にすると export がないと型エラーを起こすため、対策が必要
 */
import { group } from "./PortfolioList.module.sass"
import { Box, SimpleGrid, Text } from "@chakra-ui/react"

const PortfolioGrid = ({ children }) =>
  <SimpleGrid columns={[1, 1, 2, 2, 2, 4]} spacingX={[0, 0, 12]} spacingY={4} my={8}>
    {children}
  </SimpleGrid>

const PortfolioGroup = ({ seasonId, name, descriptionTitle, description, children }) => (
  <div className={group}>
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
  </div>
)

PortfolioGroup.propTypes = {
  seasonId: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
}

export default PortfolioGroup
