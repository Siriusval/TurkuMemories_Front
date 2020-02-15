import React, { Component } from 'react'
import { MemoryCard } from './MemoryCard'

export class MemoryList extends Component {
  generatelist() {
    const component = this.props.memories.map(
      (memory, index) => (
        <MemoryCard
          key={index}
          memory={memory}
          handleSelectMemory={this.props.handleSelectMemory}
        />
      ),
    )
    console.log('Memory list generated')
    return component
  }

  render() {
    return <div>{this.generatelist()}</div>
  }
}
