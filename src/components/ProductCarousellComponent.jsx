import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarousellComponent = () => {
  const cursorP = {
    cursor: 'pointer',
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Besteller in Laptops category</h3>
          </LinkContainer>
          <p>A superb Dell Laptop that makes you WOW!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
          style={{ height: '300px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Besteller in Books</h3>
          </LinkContainer>

          <p>Some say this is the best book ever written.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
          style={{ height: '300px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Besteller in Cameras</h3>
          </LinkContainer>
          <p>Make clear and crisp pictures</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousellComponent;
