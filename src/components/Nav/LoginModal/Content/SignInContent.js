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

export class SignInContent extends Component {
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
          <Form>
            <Form.Group grouped>
              {/* Email */}
              <Form.Input
                iconPosition="left"
                label="Email"
                placeholder="Email"
                required
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
