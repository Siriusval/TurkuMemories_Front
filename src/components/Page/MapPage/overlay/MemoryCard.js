/**
 * MemoryCard displaying memory informations
 * One per memory
 */
import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Moment from 'react-moment'
import { Memory } from '../../../../classes/memory'

export class MemoryCard extends Component {
  render() {
    var memory = new Memory({})
    memory = this.props.memory
    const content = memory.content.slice(0, 100) + '...'
    return (
      <Card color="teal" fluid>
        <Card.Content>
          <Card.Header>{memory.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              <Moment fromNow>{memory.createdAt}</Moment>
            </span>
          </Card.Meta>
          <Card.Description>{content}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
