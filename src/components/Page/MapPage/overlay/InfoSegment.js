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
  width: 'auto',
  top: '150px',
  left: '10px',
  maxHeight: 'calc(100vh - 3vw)',
  overflow: 'auto',
  padding: '20px',
  textAlign: 'left',
}

export class InfoSegment extends Component {
  render() {
    return (
      <Segment style={segmentStyle} raised>
        {this.props.memories.map((memory, index) => (
          <MemoryCard key={index} memory={memory} />
        ))}
      </Segment>
    )
  }
}
