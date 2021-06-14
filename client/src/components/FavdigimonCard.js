import React, { Component } from "react";
import { Card, Button } from "react-bootstrap/";

export class FavdigimonCard extends Component {
  render() {
    const { name, img, level, _id } = this.props.digimon;

    return (
      <>
        <Card style={{ width: "18rem",float:"left " }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{level}</Card.Text>
            <Button onClick={() => this.props.deleteFav(_id)} variant="primary">
              delete
            </Button>
            <Button
              onClick={() => this.props.showForm(this.props.digimon)}
              variant="primary"
            >
              update
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default FavdigimonCard;
