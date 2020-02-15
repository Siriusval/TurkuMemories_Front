/**
 * InfoSegment displaying most recent memories
 * or memory details when clicked
 *
 * Contain MemoryCard components as childrens
 */
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { MemoryCard } from './MemoryCard'

/**
 * Style css of container
 */
const segmentStyle = {
  zIndex: 1,
  position: 'absolute',
  width: '400px',
  top: '130px',
  left: '20px',
  height: 'calc(79vh)',
  overflow: 'auto',
  padding: '18px',
  textAlign: 'left',
}

export class InfoSegment extends Component {
  render() {
    return (
      <Segment
        style={segmentStyle}
        raised
        loading={this.props.loading}
      >
        {this.props.memories.map((memory, index) => (
          <MemoryCard key={index} memory={memory} />
        ))}
      </Segment>
    )
  }
}
