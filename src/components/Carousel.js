import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={this.props.width}
        naturalSlideHeight={this.props.height}
        totalSlides={this.props.items.length}
      >
        <Slider>
          {
            this.props.items.map((item, itemIndex) => (
              <Slide index={itemIndex} key={itemIndex}>
                <figure>
                  <img src={item.src} alt={item.alt} />
                  <figcaption>{item.description}</figcaption>
                </figure>
              </Slide>
            ))
          }
        </Slider>
        <ButtonBack></ButtonBack>
        <ButtonNext></ButtonNext>
      </CarouselProvider>
    )
  }
}

Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    description: PropTypes.string,
  }))
}

export default Carousel
