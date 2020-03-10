/**
 * Map canvas component
 * Children of MapContainer
 *
 * displays map and markers
 */
import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

export const MapCanvas = props => {
    //Vars
    const selectedMemory = props.selectedMemory;
    //offset position to center in right part of the screen
    const lngOffset = -0.008;
    const latOffset = +0.001;

    /**
     * Where map is centered
     */
    var center = [60.455 + latOffset, 22.26 + lngOffset];
    var zoom = 15;

    const applyOffset = coordinates => {
        coordinates[0] += latOffset;
        coordinates[1] += lngOffset;
    };

    const handleMove = e => {
        center = e.target.getCenter();
    };

    const handleZoom = e => {
        zoom = e.target.setZoom();
    };

    //Check if object is empty
    if (selectedMemory) {
        center = [
            selectedMemory.position.coordinates[0],
            selectedMemory.position.coordinates[1],
        ];
        applyOffset(center);
        zoom = 15;
    } else {
        zoom = 14;
    }

    return (
        <Map
            center={center}
            zoom={zoom}
            layers=""
            onMove={handleMove}
            onZoom={handleZoom}
        >
            {/* --- MAP --- */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* --- MARKERS --- */}
            {props.memories.map((element, index) => {
                const memory = element;
                const coordinates = memory.position.coordinates;
                return (
                    <Marker
                        key={memory.id}
                        position={coordinates}
                        onclick={() => {
                            props.handleSelectMemory(memory);
                        }}
                    />
                );
            })}
        </Map>
    );
};
