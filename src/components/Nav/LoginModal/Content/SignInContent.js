/**
 * Child of LoginModal
 * Render'SignInContent' form in Modal
 */
import React, { Component } from 'react'
import {
  Form,
  Button,
  Header,
  Modal,
  Icon,
  Container,
} from 'semantic-ui-react'
import apis from '../../../../api'
import Http from 'http-status-codes'
import { NotificationManager } from 'react-notifications'
import MyInput from '../../../Form/MyInput'
import Formsy from 'formsy-react'

export class SignInContent extends Component {
  constructor(props) {
    super(props)
    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.state = {}
    this.state = {
      canSubmit: false,
    }
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  submit(model) {
    apis.auth
      .localLogin(JSON.stringify(model))
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
          <br />
          {/* --- FORM --- */}
          <Formsy
            onValidSubmit={this.submit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}
          >
            <Form.Group>
              {/* Email */}
              <MyInput
                label="Email"
                icon="at"
                name="email"
                validations="isEmail"
                validationError="This is not a valid email"
                type="text"
                required
              />
              <br />
              {/* Password */}
              <MyInput
                label="Password"
                icon="lock"
                name="password"
                validations="isExisty"
                type="password"
                validationError="Please enter password"
                required
              />
              <br />

              {/* --- LINKS --- */}
              <Container textAlign="center">
                <Button
                  type="submit"
                  disabled={!this.state.canSubmit}
                >
                  Log In
                </Button>
                <br />
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
          </Formsy>
        </Modal.Description>
      </Modal.Content>
    )
  }
}
