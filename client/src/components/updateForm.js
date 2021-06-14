import React, { Component } from "react";
import { Form, Button } from "react-bootstrap/";

class UpdateForm extends Component {
  render() {
    const { choosenName, choosenimg, choosenlevel } = this.props.digimonState;

    return (
      <>
        <Form onSubmit={(e) => this.props.handeleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => this.props.handeleChange(e)}
              value={choosenName}
              name="choosenName"
              placeholder="Enter name"
            />
            <Form.Label>img</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => this.props.handeleChange(e)}
              name="choosenimg"
              value={choosenimg}
              placeholder="Enter img"
            />
            <Form.Label>level</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => this.props.handeleChange(e)}
              name="choosenlevel"
              value={choosenlevel}
              placeholder="Enter level"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default UpdateForm;
