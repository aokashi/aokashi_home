import { ChakraProps, SimpleGrid } from "@chakra-ui/react"
import React from "react"

const BoxList = ({ children, ...chakraProps }: { children: React.ReactNode & ChakraProps }) => (
  <SimpleGrid columns={[1, 2, 3]} spacing={4} {...chakraProps}>
    {children}
  </SimpleGrid>
)

export default BoxList
