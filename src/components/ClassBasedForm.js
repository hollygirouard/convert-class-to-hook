import React from 'react'
import {
  Form, FormGroup, Input,
  Label, Col, Button,
} from 'reactstrap'

export default class ClassBasedForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      attemptCount: 0,
    }
  }

  handleChange = ( event ) => {
    event.preventDefault()
    const { target } = event
    const { name } = target
    this.setState({ [ name ] : target.value })
  }

  handleClick = () => {
    this.setState({ attemptCount: this.state.attemptCount + 1 })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { email, password, attemptCount } = this.state
    return (
      <Form onSubmit={ this.handleSubmit }>
        <h1>Class-Based Form</h1>
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
          <Col sm={ { size: 10, offset: 8 } }>
            <Button onClick={ this.handleClick }>Submit</Button>
          </Col>
        </FormGroup>
        { attemptCount > 0 && attemptCount <= 3 ?
        <div>
          <strong>
            If your password fails after 3 tries, you will be locked out of your account.
          </strong>
          <div>Attempted trieds: { attemptCount }</div>
        </div>
        : null }
        { attemptCount > 3 &&
          <div>You have been locked out of your account</div>
        }
      </Form>
    )
  }
}
