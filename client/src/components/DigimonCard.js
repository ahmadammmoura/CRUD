import React, { Component } from "react";
import { Card, Button } from "react-bootstrap/";

class DigimonCard extends Component {
  render() {
      const {name,img,level} = this.props.digimon


    //   console.log(img)
    return (
      <>
        <Card style={{ width: "18rem" ,float:"left "}}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {level}
            </Card.Text>
            <Button onClick={()=>this.props.addTOfav(this.props.digimon)} variant="primary">add to fav</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default DigimonCard;
