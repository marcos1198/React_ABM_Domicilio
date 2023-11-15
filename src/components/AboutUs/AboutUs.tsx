import { Row, Col, Card, CardGroup } from "react-bootstrap"

const AboutUs = () => {
  return (
    <>

      <CardGroup className="row justify-content-center">
    <Row xs={1} md={3} className="g-3 " style={{ margin:'4px' }}>
    
      <Col >
        <Card >
          <Card.Img style={{height:'250px' }} className="img-fluid img-thumbnail" variant="top" src="https://images03.nicepage.io/c461c07a441a5d220e8feb1a/910bd281016d57a199450c15/3981417.jpg" />
          <Card.Body>
            <Card.Title>Pizza Original</Card.Title>
            <Card.Text>
            Salsa de tomate, pimiento y rucula
            <h6>$2400.00</h6>
                    <button type="button" className="btn btn-outline-secondary">Añadir al carrito</button>
                    <button type="button" className="btn btn-outline-secondary">Detalle</button>
                    
            </Card.Text>
            
          </Card.Body>

        </Card>
      </Col>
      <Col >
        <Card>
          <Card.Img style={{height:'250px' }} className="img-fluid img-thumbnail" variant="top" src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg" />
          <Card.Body>
            <Card.Title>Pizza Calabresa</Card.Title>
            <Card.Text>
            Salsa de tomate, mozzarella y salami suave
            <h6>$2400.00</h6>
            <button type="button" className="btn btn-outline-secondary">Añadir al carrito</button>
                    <button type="button" className="btn btn-outline-secondary">Detalle</button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card>
          <Card.Img style={{height:'250px' }} className="img-fluid img-thumbnail" variant="top" src="https://img.freepik.com/free-photo/crispy-pizza-made-from-kiwi-fruit-banana_140725-7253.jpg" />
          <Card.Body>
            <Card.Title>Pizza Tropical</Card.Title>
            <Card.Text>
            Salsa de tomate, mozzarella, kiwi y banana
              <h6>$2400.00</h6>
                    <button type="button" className="btn btn-outline-secondary">Añadir al carrito</button>
                    <button type="button" className="btn btn-outline-secondary">Detalle</button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
   
  </Row>
  </CardGroup>
    </>
  )
}

export default AboutUs