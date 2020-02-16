// MyInput.js
import { withFormsy } from 'formsy-react'
import React from 'react'
import { Label, Input } from 'semantic-ui-react'

class MyInput extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value)
  }

  render() {
    // An error message is passed only if the component is invalid
    const errorMessage = this.props.errorMessage

    const displayError =
      errorMessage && !this.props.isPristine

    return (
      <div>
        <label style={{ fontWeight: 'bold' }}>
          {this.props.label}
        </label>
        <br />
        <Input
          type={this.props.type}
          placeholder={
            this.props.placeholder || this.props.label || ''
          }
          onChange={this.changeValue}
          value={this.props.value || ''}
          icon={this.props.icon}
          iconPosition="left"
          required={this.props.required}
          fluid
        />
        <Label
          basic
          color="red"
          pointing
          content={errorMessage}
          hidden
          style={{
            visibility: displayError ? 'visible' : 'hidden',
          }}
        />
      </div>
    )
  }
}

export default withFormsy(MyInput)
