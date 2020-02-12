import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

export class Page404 extends Component {
  render() {
    return (
      <Header as="h2" icon>
        <Icon name="settings" />
        404 : Page not found
        <Header.Subheader>
          This page does not exist. Please go back to Home.
        </Header.Subheader>
      </Header>
    )
  }
}
