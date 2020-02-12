/**
 * Modal Component opening when we click on SignIn Button
 * Can render'SignInContent' or 'SignUpContent' depending on the state
 */
import React, { Component } from 'react'
import { Modal, Button, Container } from 'semantic-ui-react'
import { SignInContent } from './Content/SignInContent'
import { SignUpContent } from './Content/SignUpContent'

export class LoginModal extends Component {
  constructor(props) {
    super(props)
    this.handleChangeContent = this.handleChangeContent.bind(
      this,
    )
  }

  /**
   * State can be 'SignIn' or 'SignOut'
   */
  state = { toDisplay: 'SignIn' }

  /**
   * Change state when we click on link in LoginModal
   */
  handleChangeContent(event, value) {
    event.preventDefault()
    this.setState({ toDisplay: value })
    console.log(this.state.toDisplay)
  }

  render() {
    return (
      <Modal
        size="mini"
        trigger={<Button>Login</Button>}
        dimmer="blurring"
      >
        {/* --- TITLE --- */}
        <Modal.Header>
          <Container textAlign="center">
            Welcome to My Turku Memories
          </Container>
        </Modal.Header>

        {/* --- CONTENT --- */}
        {this.state.toDisplay === 'SignIn' ? (
          <SignInContent
            callbackFn={this.handleChangeContent}
          />
        ) : (
          <SignUpContent
            callbackFn={this.handleChangeContent}
          />
        )}
      </Modal>
    )
  }
}
