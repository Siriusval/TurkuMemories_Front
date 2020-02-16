/**
 * Child of LoginModal
 * Render'SignUpContent' form in Modal
 *
 * Doc for formsy : https://github.com/formsy/formsy-react
 */

import React, { Component } from 'react'
import {
  Header,
  Modal,
  Container,
  Button,
} from 'semantic-ui-react'
import apis from '../../../../api'
import HttpStatus from 'http-status-codes'
import { NotificationManager } from 'react-notifications'
import MyInput from '../../../Form/MyInput'
import Formsy from 'formsy-react'
export class SignUpContent extends Component {
  constructor(props) {
    super(props)
    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
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
    console.log(model)
    apis.auth
      .localRegister(model)
      .then(res => {
        console.log(res)
        if (
          res.status == HttpStatus.OK ||
          res.status == HttpStatus.CREATED
        ) {
          NotificationManager.success(
            'Sucessfully registered!',
            'Success',
          )
          this.props.history.push('/')
        }
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)

          if (
            error.response.status == HttpStatus.CONFLICT
          ) {
            NotificationManager.error(
              'Email already used!',
              'Error',
            )
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Header textAlign="center">Register</Header>

          {/* --- FORM --- */}
          <Formsy
            onValidSubmit={this.submit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}
          >
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

            {/* Username */}
            <MyInput
              label="Username"
              icon="user"
              name="username"
              validations="isExisty"
              validationError="This is not a valid username"
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
                Register
              </Button>
              <br />
              Already have an account ?{' '}
              <Button
                className="tertiary"
                onClick={e =>
                  this.props.callbackFn(e, 'SignIn')
                }
              >
                Sign In
              </Button>
            </Container>
          </Formsy>
        </Modal.Description>
      </Modal.Content>
    )
  }
}
