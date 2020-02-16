/**
 * Child of LoginModal
 * Render'SignUpContent' form in Modal
 */

//TODO : https://www.npmjs.com/package/formsy-react
import React, { Component } from 'react'
import {
  Header,
  Modal,
  Icon,
  Form,
  Container,
  Button,
} from 'semantic-ui-react'
import apis from '../../../../api'
import Http from 'http-status-codes'
import { NotificationManager } from 'react-notifications'

export class SignUpContent extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      email: '',
      username: '',
      password: '',
    }
  }

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value })

  handleSubmit = () => {
    const { email, username, password } = this.state
    apis.auth
      .localRegister({
        email: email,
        username: username,
        password: password,
      })
      .then(res => {
        if (Http.CREATED) {
          NotificationManager.success(
            'Sucessfully registered!',
            'Success',
          )
          this.props.history.push('/')
        }
      })
      .catch(err => {
        NotificationManager.error(
          'Error registering',
          'Error',
        )
        console.error('Error registering: ', err)
      })
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Header textAlign="center">Register</Header>

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

              {/* Username */}
              <Form.Input
                iconPosition="left"
                label="Username"
                placeholder="Username"
                required
                name="username"
                onChange={this.handleChange}
              >
                <Icon name="user" />
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
                <Form.Button>Register</Form.Button>
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
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    )
  }
}
