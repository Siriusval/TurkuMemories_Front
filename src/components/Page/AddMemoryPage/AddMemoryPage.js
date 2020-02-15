/**
 * AddMemory Page
 * Opened when 'Add memory" but in navbar clicked
 * Displays a form for the user
 *
 * Ideas : https://www.blablacar.fr/offer-seats/1
 */
import React, { Component } from 'react'
import {
  Header,
  Form,
  Segment,
  Icon,
  Button,
  Grid,
} from 'semantic-ui-react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { PageTemplate } from '../PageTemplate'
import { NotificationManager } from 'react-notifications'
import apis from '../../../api'
import Http from 'http-status-codes'
export class AddMemoryPage extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    /**
     * center : where the map is centered
     */
    this.state = {
      center: [60.455, 22.26],
      title: '',
      description: '',
      markerPosition: [],
    }
  }

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value })

  handleSubmit = () => {
    const {
      title,
      description,
      markerPosition,
    } = this.state
    apis.memories
      .createMemory({
        title: title,
        content: description,
        position: {
          type: 'Point',
          coordinates: markerPosition,
        },
      })
      .then(res => {
        if (Http.CREATED) {
          NotificationManager.success(
            'Memory has been created',
            'Success',
          )
          this.props.history.push('/')
        }
      })
  }

  handleClickPosition = e => {
    const { lat, lng } = e.latlng
    console.log(lat, lng)
    this.setState({
      markerPosition: [lat, lng],
    })
  }

  render() {
    return (
      <PageTemplate>
        {/* --- TITLE --- */}
        <Header as="h2" textAlign="left">
          Add a new Memory
        </Header>
        <Form onSubmit={this.handleSubmit}>
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
                  {/* Title */}
                  <Form.Input
                    fluid
                    label="Title"
                    placeholder="Example : Visit, Sunday Walk..."
                    onChange={this.handleChange}
                    name="title"
                  />

                  {/* Description */}
                  <Form.TextArea
                    label="Description"
                    placeholder="Tell us more about it..."
                    type="text"
                    rows={5}
                    onChange={this.handleChange}
                    name="description"
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
                {/* --- TITLE --- */}
                <Header as="h3" textAlign="left">
                  Indicate position of the memory
                </Header>

                {/* --- MAP --- */}
                <Map
                  center={this.state.center}
                  zoom={13.5}
                  layers=""
                  style={{
                    position: 'relative',
                    height: '92%',
                    width: '100%',
                  }}
                  onClick={this.handleClickPosition}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {this.state.markerPosition.length !==
                  0 ? (
                    <Marker
                      position={this.state.markerPosition}
                    />
                  ) : null}
                </Map>
              </Segment>
            </Grid.Column>

            {/* --- SUBMIT BUTTON --- */}
            <Grid.Row centered>
              <Form.Button>Continue</Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </PageTemplate>
    )
  }
}
