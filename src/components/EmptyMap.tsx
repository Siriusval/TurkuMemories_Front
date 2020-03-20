import React, { useState } from 'react';
import { InteractiveMap, Marker, NavigationControl } from 'react-map-gl';
import { Memory, Memories } from '../types';
import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';

const selectedIcon = '/images/marker-icon-red.png';
const iconSize = { width: 25, height: 41 };

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectedMarker: {
            backgroundImage: `url(${selectedIcon})`,
            backgroundSize: '',
            width: `${iconSize.width}px`,
            height: `${iconSize.height}px`,
            //border-radius: 50%,
            cursor: 'pointer',
            backgroundRepeat: 'no-repeat',
        },
    }),
);

export const EmptyMap = props => {
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

    const [marker, setMarker] = React.useState(null);

    const handleClick = ({ lngLat: [longitude, latitude] }) => {
        setMarker({
            longitude,
            latitude,
            offsetLeft: -iconSize.width / 2,
            offsetTop: iconSize.height,
        });
    };

    return (
        <InteractiveMap
            onClick={handleClick}
            {...viewport}
            mapStyle={mapStyle}
            mapboxApiAccessToken={
                'pk.eyJ1IjoibXl0dXJrdW1lbW9yaWVzIiwiYSI6ImNrNXhuZjdjMjBramMzbm54YWNjZWsweDQifQ.VSBHa6HkpaJfywOHhEjgbA'
            }
            width="40vw"
            height="40vh"
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
            {marker !== null ? (
                <Marker {...marker} className={classes.selectedMarker} />
            ) : null}
        </InteractiveMap>
    );
};
