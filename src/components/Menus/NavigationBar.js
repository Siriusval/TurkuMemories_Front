import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Dropdown,
  MenuItem,
  Image,
} from 'semantic-ui-react'

import LoginModal from './LoginModal/LoginModal'

const languageOptions = [
  { key: 'EN', text: 'EN', value: 'EN' },
  { key: 'FI', text: 'FI', value: 'FI' },
  { key: 'SWE', text: 'SWE', value: 'SWE' },
]

export class NavigationBar extends Component {
  state = { activeItem: 'Home', activeLanguage: 'EN' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleChangeLanguage = (e, { key }) =>
    this.setState({ activeLanguage: key })

  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary pointing>
        <MenuItem as={Link} to="/">
          <Image
            src="/images/mtm_font_only.svg"
            size="small"
          />
        </MenuItem>
        <Menu.Item
          as={Link}
          to="/"
          key="1"
          active={activeItem === 'Home'}
          name="Home"
          content="Home"
          onClick={this.handleItemClick}
        ></Menu.Item>
        <Menu.Item
          as={Link}
          to="myMemories"
          key="2"
          active={activeItem === 'My Memories'}
          name="My Memories"
          content="My Memories"
          onClick={this.handleItemClick}
        ></Menu.Item>
        <Menu.Item
          as={Link}
          to="about"
          key="3"
          active={activeItem === 'About Us'}
          name="About Us"
          content="About Us"
          onClick={this.handleItemClick}
        ></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <LoginModal />
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="world"
              value={this.state.activeLanguage}
              options={languageOptions}
              onChange={this.handleChangeLanguage}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
