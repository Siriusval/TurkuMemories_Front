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
import { Memory } from '../../../classes/memory'

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
        {this.props.memories.map(element => {
          const memory = new Memory(element)
          return (
            <Marker
              key={memory.id}
              position={memory.position.coordinates}
            >
              {/* --- POPUPS --- */}
              <Popup>
                {memory.title}
                <br />
                {memory.content}
              </Popup>
            </Marker>
          )
        })}
      </Map>
    )
  }
}
