import React from "react"
import PropTypes from "prop-types"

/**
 * 親要素が PortfolioList の場合にスタイルシートを付与したいため、CSSはPortfolioListと共用
 * @todo TypeScript にすると export がないと型エラーを起こすため、対策が必要
 */
import { group } from "./PortfolioList.module.sass"
import { Box, SimpleGrid, Text } from "@chakra-ui/react"

const PortfolioGrid = ({ children }) =>
  <SimpleGrid columns={[1, 1, 2]} spacingX={[4, 4, 8]} spacingY={4} my={8}>
    {children}
  </SimpleGrid>

const PortfolioGroup = ({ seasonId, name, descriptionTitle, description, children }) => (
  <div className={group}>
    <div id={seasonId}></div>
    {name &&
      <PortfolioGrid>

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

      </PortfolioGrid>
    }
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
