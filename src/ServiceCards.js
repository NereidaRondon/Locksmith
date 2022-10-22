import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import car from './images/car-solid.svg';
import house from './images/house.svg';
import building from './images/building.svg';

export default function ServiceCards() {
  return (
    <CardGroup>
      <Card className="service-cards">
        <Card.Img
          variant="top"
          className="service--icons car m-auto"
          src={car}
          alt="Automobile keys service"
        />

        <Card.Body>
          <Card.Title className="m-auto text-center">Automotive</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <Card className="service-cards">
        <Card.Img
          variant="top"
          className="service--icons m-auto"
          src={house}
          alt="residential keys service"
        />

        <Card.Body>
          <Card.Title className="m-auto text-center">Residential</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <Card className="service-cards">
        <Card.Img
          variant="top"
          className="service--icons m-auto"
          src={building}
          alt="commercial keys service"
        />

        <Card.Body>
          <Card.Title className="m-auto text-center">Commercial</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
