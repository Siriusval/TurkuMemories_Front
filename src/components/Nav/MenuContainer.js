/**
 * Menu bar for website
 * Clicking on the items trigger react Router navigation, then render page
 *
 * Contain navigation bar 100% of time
 * Displays filter bar only if on home page (which is map page)
 */
import React, { Component } from 'react'
import { NavigationBar } from './Bars/NavigationBar'
import { FilterBar } from './Bars/FilterBar'

/**
 * Style css
 */
const menuStyle = {
  position: 'relative',
  width: '100%',
  height: 'auto',
  top: 0,
  left: 0,
  zIndex: '2',
  backgroundColor: 'white',
}

export class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.handleChangeLanguage = this.handleChangeLanguage.bind(
      this,
    )
    this.handleItemClick = this.handleItemClick.bind(this)
    /**
     * activeItem : highlight current tab
     * activeLanguage : choose website language
     */
    this.state = {
      activeItem: 'Home',
      activeLanguage: 'EN',
    }
  }

  /**
   * Callback : handle click on nav bar items
   */
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  /**
   * Callback : handle click on language dropdown item
   */
  handleChangeLanguage = (e, { key }) =>
    this.setState({ activeLanguage: key })

  render() {
    const location = this.props.location
    console.log(location)

    return (
      <div style={menuStyle}>
        <NavigationBar
          menuState={this.state}
          handleItemClick={this.handleItemClick}
          handleChangeLanguage={this.handleChangeLanguage}
        />
        {location.pathname === '/' ? (
          <FilterBar menuState={this.state} />
        ) : null}
      </div>
    )
  }
}
