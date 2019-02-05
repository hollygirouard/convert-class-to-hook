import React from 'react'
import {
  Form, FormGroup, Input,
  Label, Col, Button,
} from 'reactstrap'

export default class ClassBasedForm extends React.Component {
  state = {

  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={ 2 }>Email</Label>
          <Col sm={ 8 }>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={ 2 }>Password</Label>
          <Col sm={ 8 }>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 8 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
