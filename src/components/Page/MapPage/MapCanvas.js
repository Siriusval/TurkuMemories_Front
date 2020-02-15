/**
 * Map canvas component
 * Children of MapContainer
 *
 * displays map and markers
 */
import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { Memory } from '../../../classes/memory'

//offset position to center in left part of the screen
const lngOffset = -0.008
const latOffset = +0.001

export class MapCanvas extends Component {
  /**
   * Where map is centered
   */
  state = {
    center: [60.455, 22.26],
    zoom: 14,
  }

  applyOffset = coordinates => {
    coordinates[0] += latOffset
    coordinates[1] += lngOffset
  }

  render() {
    var center = this.state.center
    var zoom = this.state.zoom
    const selectedMemory = this.props.selectedMemory
    if (selectedMemory) {
      center = selectedMemory.coordinates
      this.applyOffset(center)
      zoom = 15
    }

    return (
      <Map center={center} zoom={zoom} layers="">
        {/* --- MAP --- */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* --- MARKERS --- */}
        {this.props.memories.map((element, index) => {
          const memory = new Memory(element)
          const coordinates = memory.coordinates
          return (
            <Marker
              key={memory.id}
              position={coordinates}
              onclick={() => {
                this.props.handleSelectMemory(index)
              }}
            >
              {/* --- POPUPS --- */}
              {/* <Popup>
                {memory.title}
                <br />
                {memory.content}
              </Popup> */}
            </Marker>
          )
        })}
      </Map>
    )
  }
}
