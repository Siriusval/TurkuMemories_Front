/**
 * Map canvas component
 * Children of MapContainer
 *
 * displays map and markers
 */
import React, { Component } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

//offset position to center in right part of the screen
const lngOffset = -0.008;
const latOffset = +0.001;

export class MapCanvas extends Component {
    constructor(props) {
        super(props);
        /**
         * Where map is centered
         */
        this.state = {
            center: [60.455 + latOffset, 22.26 + lngOffset], //map center is moved a bit to the right because of the infopanel on the left
            zoom: 14,
        };
    }

    applyOffset = coordinates => {
        coordinates[0] += latOffset;
        coordinates[1] += lngOffset;
    };

    render() {
        var center = this.state.center;
        var zoom = this.state.zoom;
        const selectedMemory = this.props.selectedMemory;

        if (selectedMemory) {
            center = [
                selectedMemory.position.coordinates[0],
                selectedMemory.position.coordinates[1],
            ];
            this.applyOffset(center);
            zoom = 15;
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
                    const memory = element;
                    const coordinates = memory.position.coordinates;
                    return (
                        <Marker
                            key={memory.id}
                            position={coordinates}
                            onclick={() => {
                                this.props.handleSelectMemory(memory);
                            }}
                        >
                            {/* --- POPUPS --- */}
                            {/* <Popup>
                {memory.title}
                <br />
                {memory.content}
              </Popup> */}
                        </Marker>
                    );
                })}
            </Map>
        );
    }
}
