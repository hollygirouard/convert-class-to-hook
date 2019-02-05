import React from 'react'
import {
  Form, FormGroup, Input,
  Label, Col, Button,
} from 'reactstrap'

export default class ClassBasedForm extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = ( event ) => {
    event.preventDefault()
    const { target } = event
    const { name } = target
    this.setState({ [ name ] : target.value })
    console.log(target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { email, password } = this.state
    return (
      <Form onSubmit={ this.handleSubmit }>
        <FormGroup row>
          <Label for="exampleEmail" sm={ 2 }>Email</Label>
          <Col sm={ 8 }>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              value={ email }
              onChange={ this.handleChange }
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
              value={ password }
              onChange={ this.handleChange }
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
