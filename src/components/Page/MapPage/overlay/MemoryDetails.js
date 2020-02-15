import React, { Component } from 'react'
import {
  Button,
  Card,
  Image,
  Grid,
} from 'semantic-ui-react'

import Moment from 'react-moment'
export class MemoryDetails extends Component {
  render() {
    const memory = this.props.memory
    return (
      <div>
        <Button
          icon="chevron left"
          labelPosition="left"
          content="Back"
          onClick={this.props.handleUnselectMemory}
        />
        <Card fluid>
          <Image src="" wrapped />
          <Card.Content>
            <Card.Header>{memory.title}</Card.Header>
            <Card.Meta>
              <span className="date">
                <Moment fromNow>{memory.createdAt}</Moment>
              </span>
            </Card.Meta>
            <Card.Description>
              {memory.content}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Grid textAlign="center" columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Button
                    color="red"
                    content="Like"
                    icon="heart"
                    label={{
                      basic: true,
                      color: 'red',
                      pointing: 'left',
                      content: '27',
                    }}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Button
                    color="blue"
                    content="Share"
                    icon="share alternate"
                    label={{
                      basic: true,
                      color: 'blue',
                      pointing: 'left',
                      content: '13',
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
