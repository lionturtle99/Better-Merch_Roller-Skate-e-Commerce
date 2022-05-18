import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({images}) => {
  return (
    <Carousel>
      {images.map((image, index) => 
          <Carousel.Item key={index}>
            <div className="d-block align-items-center">
              <img
                className="d-flex w-100"
                style={{height: "15em"}}
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