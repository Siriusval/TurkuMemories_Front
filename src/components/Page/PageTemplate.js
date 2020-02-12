/**
 * Page template
 * Apply custom style to children
 */
import React, { Component } from 'react'

/**
 * Style css
 */
const pageStyle = { width: '80%', margin: '20px auto' }

export class PageTemplate extends Component {
  render() {
    return (
      <div className="wrapper" style={pageStyle}>
        {/* Component to nest */}
        {this.props.children}
      </div>
    )
  }
}
