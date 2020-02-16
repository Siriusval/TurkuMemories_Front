/**
 * Child of LoginModal
 * Render'SignInContent' form in Modal
 */
import React, { Component } from 'react'
import {
  Button,
  Header,
  Modal,
  Icon,
  Form,
  Container,
} from 'semantic-ui-react'
import apis from '../../../../api'
import Http from 'http-status-codes'
import { NotificationManager } from 'react-notifications'

export class SignInContent extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value })

  handleSubmit = () => {
    const { email, password } = this.state
    apis.auth
      .localLogin({
        email: email,
        password: password,
      })
      .then(res => {
        if (Http.OK) {
          NotificationManager.success(
            'Nice to see you again!',
            'Success',
          )
          this.props.history.push('/')
        }
      })
      .catch(err => {
        NotificationManager.error(
          'Email and/or password incorrect',
          'Error',
        )
        console.error('Local login failed: ', err)
      })
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Container textAlign="center">
            <Header>Login</Header>

            {/* --- BUTTONS --- */}
            {/* Facebook */}
            <Button
              icon
              labelPosition="left"
              color="facebook"
            >
              <Icon name="facebook" />
              Facebook
            </Button>

            {/* Google */}
            <Button
              icon
              labelPosition="left"
              color="google plus"
            >
              <Icon name="google" />
              Google
            </Button>
            <br />
          </Container>

          {/* --- FORM --- */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group grouped>
              {/* Email */}
              <Form.Input
                iconPosition="left"
                label="Email"
                placeholder="Email"
                required
                name="email"
                onChange={this.handleChange}
              >
                <Icon name="at" />
                <input />
              </Form.Input>
              <br />

              {/* Password */}
              <Form.Input
                iconPosition="left"
                label="Password"
                placeholder="Password"
                type="password"
                required
                name="password"
                onChange={this.handleChange}
              >
                <Icon name="lock" />
                <input />
              </Form.Input>

              {/* --- LINKS --- */}
              <Container textAlign="center">
                <Form.Button>Log In</Form.Button>
                <Button className="tertiary">
                  Forgotten your password ?
                </Button>
                <br />
                Not registered yet ?{' '}
                <Button
                  className="tertiary"
                  onClick={e =>
                    this.props.callbackFn(e, 'SignUp')
                  }
                >
                  Sign Up
                </Button>
              </Container>
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    )
  }
}
