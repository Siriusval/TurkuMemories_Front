/**
 * Map canvas component
 * Children of MapContainer
 *
 * displays map and markers
 */
import React, { Component } from 'react'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'

export class MapCanvas extends Component {
  /**
   * Where map is centered
   */
  state = {
    center: [60.455, 22.26],
  }
  render() {
    return (
      <Map center={this.state.center} zoom={13.5} layers="">
        {/* --- MAP --- */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* --- MARKERS --- */}
        {this.props.memories.map(memory => {
          var position = memory.position.split(',')
          position = [
            parseFloat(position[0]),
            parseFloat(position[1]),
          ]
          return (
            <Marker
              key={memory.id.toString()}
              position={position}
            >
              {/* --- POPUPS --- */}
              <Popup>
                {memory.title}
                <br />
                {memory.description}
              </Popup>
            </Marker>
          )
        })}
      </Map>
    )
  }
}
