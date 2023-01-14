import ProductCarousellComponent from '../components/ProductCarousellComponent';
import CategoryCardComponent from '../components/CategoryCardComponent';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const categories = [
    'Tablets',
    'Monitors',
    'Games',
    'Printers',
    'Software',
    'Cameras',
    'Books',
    'Videos',
  ];
  return (
    <>
      <ProductCarousellComponent />
      <Container>
        <Col>
          <Row xs={1} md={2} className="g-4 mt-5">
            {categories.map((category, idx) => (
              <CategoryCardComponent key={idx} category={category} idx={idx} />
            ))}
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default HomePage;
