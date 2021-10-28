import React from "react"
import PropTypes from "prop-types"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import {
  carousel,
  items as styleItems,
  item as styleItem,
  itemFigure,
  itemImage,
  itemCaption,
  backButton,
  backButtonIcon,
  nextButton,
  nextButtonIcon
} from "./Carousel.module.sass"
import ArrowIcon from "../images/button_icon-arrow.svg"
import Image from "./Image"

const Carousel = ({ width, height, items }) => (
  <CarouselProvider
    naturalSlideWidth={width}
    naturalSlideHeight={height}
    totalSlides={items.length}
    className={carousel}
  >
    <Slider className={styleItems}>
      {items.map((item, itemIndex) => (
        <Slide index={itemIndex} key={itemIndex} innerClassName={styleItem}>
          <figure className={itemFigure}>
            <Image src={item.path} alt={item.alt} className={itemImage} />
            <figcaption className={itemCaption}>{item.description}</figcaption>
          </figure>
        </Slide>
      ))}
    </Slider>
    <ButtonBack className={backButton}><img src={ArrowIcon} alt="前" className={backButtonIcon} /></ButtonBack>
    <ButtonNext className={nextButton}><img src={ArrowIcon} alt="次" className={nextButtonIcon} /></ButtonNext>
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
