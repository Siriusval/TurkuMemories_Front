import React, { useState } from 'react';
import ReactMapGl, { Marker, NavigationControl } from 'react-map-gl';
import { Memory, Memories } from '../types';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const normalIcon = '/images/marker-icon.png';
const selectedIcon = '/images/marker-icon-red.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        marker: {
            backgroundImage: `url(${normalIcon})`,
            backgroundSize: 'contain',
            width: '25px',
            height: '41px',
            //border-radius: 50%,
            cursor: 'pointer',
            backgroundRepeat: 'no-repeat',
        },
        selectedMarker: {
            backgroundImage: `url(${selectedIcon})`,
            backgroundSize: 'contain',
            width: '25px',
            height: '41px',
            //border-radius: 50%,
            cursor: 'pointer',
            backgroundRepeat: 'no-repeat',
        },
    }),
);

export const MapboxContainer = props => {
    const classes = useStyles();

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

    const handleMarkerClick = (e, memory) => {
        e.preventDefault();
        props.handleSelectMemory(memory);
        setViewport({
            ...viewport,
            latitude: memory.position.coordinates[0],
            longitude: memory.position.coordinates[1],
        });
    };

    const renderMarkers = () => {
        return props.memories['rows'].map(memory => {
            const markerClass =
                memory === selectedMemory
                    ? classes.selectedMarker
                    : classes.marker;
            return (
                <Marker
                    key={memory.id}
                    latitude={memory.position.coordinates[0]}
                    longitude={memory.position.coordinates[1]}
                >
                    <div
                        className={markerClass}
                        onClick={e => {
                            handleMarkerClick(e, memory);
                        }}
                    />
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
