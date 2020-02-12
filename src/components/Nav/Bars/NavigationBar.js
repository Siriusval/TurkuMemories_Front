/**
 * Navigation Bar, children of MenuContainer
 * Shows tabs that allows us to reach pages of the website
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Dropdown,
  MenuItem,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react'
import { LoginModal } from '../LoginModal/LoginModal'

/**
 * Language options for dropdown item
 */
const languageOptions = [
  { key: 'EN', text: 'EN', value: 'EN' },
  { key: 'FI', text: 'FI', value: 'FI' },
  { key: 'SWE', text: 'SWE', value: 'SWE' },
]

export class NavigationBar extends Component {
  render() {
    const activeItem = this.props.menuState.activeItem
    const activeLanguage = this.props.menuState
      .activeLanguage

    return (
      <Menu secondary pointing>
        {/* --- LOGO --- */}
        <MenuItem
          as={Link}
          to="/"
          key="0"
          name="Home"
          onClick={this.props.handleItemClick}
          style={{ padding: ' 8px 0px 0px 8px' }}
        >
          <Image
            src="/images/mtm_font_only.svg"
            size="small"
          />
        </MenuItem>

        {/* --- HOME --- */}
        <Menu.Item
          as={Link}
          to="/"
          key="1"
          active={activeItem === 'Home'}
          name="Home"
          content="Home"
          onClick={this.props.handleItemClick}
        ></Menu.Item>

        {/* --- MY MEMORIES --- */}
        <Menu.Item
          as={Link}
          to="myMemories"
          key="2"
          active={activeItem === 'My Memories'}
          name="My Memories"
          content="My Memories"
          onClick={this.props.handleItemClick}
        ></Menu.Item>

        {/* --- ABOUT US --- */}
        <Menu.Item
          as={Link}
          to="about"
          key="3"
          active={activeItem === 'About Us'}
          name="About Us"
          content="About Us"
          onClick={this.props.handleItemClick}
        ></Menu.Item>

        <Menu.Menu position="right">
          {/* --- ADD MEMORY --- */}
          <Menu.Item
            as={Link}
            to="addMemory"
            name="Add Memory"
            onClick={this.props.handleItemClick}
          >
            <Button icon labelPosition="left" color="teal">
              <Icon name="add" />
              Add Memory
            </Button>
          </Menu.Item>

          {/* --- LOGIN --- */}
          <Menu.Item>
            <LoginModal />
          </Menu.Item>

          {/* --- LANGUAGE --- */}
          <Menu.Item>
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="world"
              value={activeLanguage}
              options={languageOptions}
              onClick={this.props.handleChangeLanguage}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
