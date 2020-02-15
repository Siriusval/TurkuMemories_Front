/**
 * InfoSegment displaying most recent memories
 * or memory details when clicked
 *
 * Contain MemoryCard components as childrens
 */
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { MemoryList } from './MemoryList'
import { MemoryDetails } from './MemoryDetails'

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
    const selectedMemory = this.props.selectedMemory
    return (
      <Segment
        style={segmentStyle}
        raised
        loading={this.props.loading}
      >
        {selectedMemory ? (
          <MemoryDetails
            handleUnselectMemory={
              this.props.handleUnselectMemory
            }
            memory={selectedMemory}
          />
        ) : (
          <MemoryList
            memories={this.props.memories}
            handleSelectMemory={
              this.props.handleSelectMemory
            }
          />
        )}
      </Segment>
    )
  }
}
