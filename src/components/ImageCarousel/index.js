import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ images }) => {

  return (
      <Carousel>
        {images.map((image, index) => 
            <Carousel.Item key={index}>
              <div className="d-block w-25 h-25 align-items-center">
                <img
                  className="d-flex w-100"
                  src={image.url}
                  alt={image.alt}
                />
              </div>
            </Carousel.Item>
        )}
      </Carousel>
  )
}

export default ImageCarousel;