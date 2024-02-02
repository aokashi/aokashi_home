import { Box, SystemStyleObject } from "@chakra-ui/react"
import React from "react"

import PortfolioItemsArrowStart from "../images/portfolio_items_arrow-start.svg"
import PortfolioItemsArrowCenter from "../images/portfolio_items_arrow-center.svg"
import PortfolioItemsArrowEnd from "../images/portfolio_items_arrow-end.svg"

const makeArrowPartsStyle = (image): SystemStyleObject => ({
  backgroundImage: image,
  backgroundRepeat: "no-repeat",
  backgroundPositionX: ["left", "left", "center"],
  backgroundPositionY: "bottom",
  content: "''",
  display: "block",
  position: "absolute",
  width: "full",
})

const PortfolioList = ({ children }) => (
  <Box
    _before={{
      ...makeArrowPartsStyle(PortfolioItemsArrowStart),
      top: 0,
      height: "32px",
    }}
    _after={{
      ...makeArrowPartsStyle(PortfolioItemsArrowEnd),
      bottom: 0,
      height: "128px",
    }}
    backgroundImage={PortfolioItemsArrowCenter}
    backgroundRepeat="repeat-y"
    backgroundPosition={["left top", "left top", "center top"]}
    backgroundClip="content-box"
    padding="32px 0 128px"
    position="relative"
  >
    <Box paddingLeft={["64px", "64px", 0]}>
      {children}
    </Box>
  </Box>
)

export default PortfolioList
