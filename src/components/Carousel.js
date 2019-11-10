import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import styles from './Carousel.module.sass'
import ArrowIcon from '../images/button_icon-arrow.svg'

class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={this.props.width}
        naturalSlideHeight={this.props.height}
        totalSlides={this.props.items.length}
        className={styles.carousel}
      >
        <Slider className={styles.items}>
          {
            this.props.items.map((item, itemIndex) => (
              <Slide index={itemIndex} key={itemIndex} innerClassName={styles.item}>
                <figure className={styles.itemFigure}>
                  <img src={item.path} alt={item.alt} className={styles.itemImage} />
                  <figcaption className={styles.itemCaption}>{item.description}</figcaption>
                </figure>
              </Slide>
            ))
          }
        </Slider>
        <ButtonBack className={styles.backButton}><img src={ArrowIcon} alt='前' className={styles.backButtonIcon} /></ButtonBack>
        <ButtonNext className={styles.nextButton}><img src={ArrowIcon} alt='次' className={styles.nextButtonIcon} /></ButtonNext>
      </CarouselProvider>
    )
  }
}

Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string,
    description: PropTypes.string,
  }))
}

export default Carousel
