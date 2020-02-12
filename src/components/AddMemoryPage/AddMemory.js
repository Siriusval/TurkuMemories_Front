import React, { Component } from 'react'
import {
  Header,
  Form,
  Segment,
  Icon,
  Button,
  Grid,
} from 'semantic-ui-react'

import { Map, TileLayer } from 'react-leaflet'

//https://www.blablacar.fr/offer-seats/1

export class AddMemory extends Component {
  state = {
    center: [60.455, 22.26],
    pageStyle: { width: '80%', margin: '20px auto' },
  }
  render() {
    return (
      <div style={this.state.pageStyle}>
        <Header as="h2" textAlign="left">
          Add a new Memory
        </Header>
        <Form>
          {/* --- TITLE --- */}
          <Grid columns={2}>
            {/* --- COLUMN 1 --- */}
            <Grid.Column>
              {/* --- Informations --- */}
              <Segment.Group>
                <Segment textAlign="left">
                  <Header as="h3">Informations</Header>
                </Segment>
                <Segment
                  style={{ background: '#f9fafb' }}
                  textAlign="left"
                >
                  <Form.Input
                    fluid
                    label="Title"
                    placeholder="Example : Visit, Sunday Walk..."
                  />
                  <Form.TextArea
                    label="Description"
                    placeholder="Tell us more about it..."
                    type="text"
                    rows={5}
                  />
                </Segment>
              </Segment.Group>

              {/* --- Image --- */}
              <Segment.Group>
                <Segment textAlign="left">
                  <Header as="h3">Image (Optional)</Header>
                </Segment>
                <Segment placeholder>
                  <Header icon>
                    <Icon
                      name="file image outline"
                      style={{ height: 'auto' }}
                    />
                    Add an image for your memory.
                  </Header>
                  <Button primary>Add Document</Button>
                </Segment>
              </Segment.Group>
            </Grid.Column>

            {/* --- COLUMN 2 --- */}
            <Grid.Column stretched>
              <Segment>
                <Header as="h3" textAlign="left">
                  Indicate position of the memory
                </Header>
                <Map
                  center={this.state.center}
                  zoom={13.5}
                  layers=""
                  style={{
                    position: 'relative',
                    height: '92%',
                    width: '100%',
                  }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                </Map>
              </Segment>
            </Grid.Column>

            <Grid.Row centered>
              <Form.Button>Continue</Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    )
  }
}
