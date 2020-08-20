import React from "react"
import PropTypes from "prop-types"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import styles from "./Carousel.module.sass"
import ArrowIcon from "../images/button_icon-arrow.svg"
import Img from "gatsby-image"

const Carousel = ({ width, height, items }) => (
  <CarouselProvider
    naturalSlideWidth={width}
    naturalSlideHeight={height}
    totalSlides={items.length}
    className={styles.carousel}
  >
    <Slider className={styles.items}>
      {items.map((item, itemIndex) => (
        <Slide index={itemIndex} key={itemIndex} innerClassName={styles.item}>
          <figure className={styles.itemFigure}>
            <Img fluid={item.path.childImageSharp.fluid} alt={item.alt} className={styles.itemImage} />
            <figcaption className={styles.itemCaption}>{item.description}</figcaption>
          </figure>
        </Slide>
      ))}
    </Slider>
    <ButtonBack className={styles.backButton}><img src={ArrowIcon} alt="前" className={styles.backButtonIcon} /></ButtonBack>
    <ButtonNext className={styles.nextButton}><img src={ArrowIcon} alt="次" className={styles.nextButtonIcon} /></ButtonNext>
  </CarouselProvider>
)

Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    path: Img.propTypes.fluid,
    alt: PropTypes.string,
    description: PropTypes.string,
  }))
}

export default Carousel
