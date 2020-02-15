import React, { Component } from 'react'
import { MemoryCard } from './MemoryCard'

export class MemoryList extends Component {
  render() {
    return (
      <div>
        {this.props.memories.map((memory, index) => (
          <MemoryCard key={index} memory={memory} />
        ))}
      </div>
    )
  }
}
