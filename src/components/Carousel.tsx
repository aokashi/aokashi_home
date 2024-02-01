import React from "react"
import PropTypes from "prop-types"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { Box, Button, ButtonProps, Center, Image as ChakraImage, useBreakpointValue } from "@chakra-ui/react"

import ArrowIcon from "../images/button_icon-arrow.svg"
import Image from "./Image"

const CAROUSEL_BUTTON_SIZE_PX = 64;
const CAROUSEL_BUTTON_HEIGHT_PX = 48;
const CAROUSEL_BUTTON_ICON_SIZE_PX = 40;

const CarouselButton = ({ alt, flip, ...props }: { alt: string, flip?: boolean } & ButtonProps) => {
  const isFloatButton = useBreakpointValue({ base: false, lg: true });
  return (
    <Button
      _disabled={{
        visibility: "hidden",
      }}
      colorScheme="blackAlpha"
      p={3}
      variant="solid"
      {...isFloatButton ? ({
        position: "absolute",
        top: `calc(50% - (${CAROUSEL_BUTTON_SIZE_PX}px / 2))`,
        w: `${CAROUSEL_BUTTON_SIZE_PX}px`,
        h: `${CAROUSEL_BUTTON_SIZE_PX}px`,
      }) : ({
        position: "static",
        w: "50%",
        h: `${CAROUSEL_BUTTON_HEIGHT_PX}px`,
      })}
      {...props}
    >
      <ChakraImage
        src={ArrowIcon}
        alt={alt}
        transform={flip ? "rotate(180deg)" : undefined}
        w={`${CAROUSEL_BUTTON_ICON_SIZE_PX}px`}
      ></ChakraImage>
    </Button>
  )
}

type CarouselItem = {
  // prop-types では object となっているが、処理される Chakra UI の Image の src は string のため string に揃える
  path: string,
  alt: string,
  description: string,
}

type Props = {
  width: number,
  height: number,
  items: CarouselItem[],
}

const Carousel = ({ width, height, items }: Props) => (
  <CarouselProvider
    naturalSlideWidth={width}
    naturalSlideHeight={height}
    totalSlides={items.length}
  >
    <Box position="relative">
      <Slider>
        {items.map((item, itemIndex) => (
          <Slide index={itemIndex} key={itemIndex}>
            <Box as="figure">
              <Center>
                <Image src={item.path} alt={item.alt} />
              </Center>
              <Box
                backgroundColor="rgba(0, 0, 0, .5)"
                bottom={0}
                color="white"
                p={3}
                position="absolute"
                textAlign="center"
                w="full"
              >
                <figcaption>{item.description}</figcaption>
              </Box>
            </Box>
          </Slide>
        ))}
      </Slider>
      <CarouselButton as={ButtonBack} alt="前" left={0} />
      <CarouselButton as={ButtonNext} alt="次" right={0} flip />
    </Box>
  </CarouselProvider>
)

Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.object,
    alt: PropTypes.string,
    description: PropTypes.string,
  }))
}

export default Carousel
