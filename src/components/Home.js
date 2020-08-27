import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const Home = (props) => {
  return (
    <Container>
      <Row>
        <Col>
            <Jumbotron>
                <h1 className="display-3">Welcome, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary">Buy Now!</Button>
                </p>
            </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card></Col>
        <Col>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card></Col>
        <Col>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card></Col>
        <Col>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card></Col>
      </Row>
      <Row>
        <Col xs="3"></Col>
        <Col xs="auto"></Col>
        <Col xs="3"></Col>
      </Row>
      <Row>
        <Col xs="6"></Col>
        <Col xs="6"></Col>
      </Row>
      <Row>
        <Col xs="6" sm="4"></Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4"></Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}></Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}></Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}></Col>
        <Col sm={{ size: 'auto', offset: 1 }}></Col>
      </Row>
    </Container>
  );
}

export default Home;