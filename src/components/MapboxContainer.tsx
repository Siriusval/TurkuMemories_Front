import React, { useState } from 'react';
import ReactMapGl, { Marker, NavigationControl } from 'react-map-gl';
import { Memory, Memories } from '../types';

const normalIcon = '/images/marker-icon.png';
const selectedIcon = '/images/marker-icon-red.png';

export const MapboxContainer = props => {
    //State
    const [viewport, setViewport] = useState({
        latitude: 60.455,
        longitude: 22.26,
        zoom: 13,
        bearing: 0,
        pitch: 0,
    });

    const memories: Memories = props.memories;
    const selectedMemory = props.selectedMemory;

    const mapStyle = 'mapbox://styles/mapbox/streets-v11';

    const buttonStyle = {
        backgroundColor: 'Transparent',
        backgroundRepeat: 'no-repeat',
        border: 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        outline: 'none',
    };

    const handleMarkerClick = (e, memory) => {
        e.preventDefault();
        props.handleUnselectMemory(memory);
        setViewport({
            ...viewport,
            latitude: memory.position.coordinates[0],
            longitude: memory.position.coordinates[1],
        });
    };

    const renderMarkers = () => {
        return props.memories['rows'].map(memory => {
            const icon = memory === selectedMemory ? selectedIcon : normalIcon;
            return (
                <Marker
                    key={memory.id}
                    latitude={memory.position.coordinates[0]}
                    longitude={memory.position.coordinates[1]}
                >
                    <button
                        style={buttonStyle}
                        onClick={e => {
                            handleMarkerClick(e, memory);
                        }}
                    >
                        <img src={icon} alt="marker" />
                    </button>
                </Marker>
            );
        });
    };

    return (
        <ReactMapGl
            {...viewport}
            mapStyle={mapStyle}
            mapboxApiAccessToken={
                'pk.eyJ1IjoibXl0dXJrdW1lbW9yaWVzIiwiYSI6ImNrNXhuZjdjMjBramMzbm54YWNjZWsweDQifQ.VSBHa6HkpaJfywOHhEjgbA'
            }
            width="100vw"
            height="100vh"
            onViewportChange={setViewport}
        >
            <div
                style={{
                    position: 'absolute',
                    right: 30,
                    bottom: 30,
                }}
            >
                <NavigationControl />
            </div>
            {props.memories && props.memories.length !== 0
                ? renderMarkers()
                : null}
        </ReactMapGl>
    );
};
