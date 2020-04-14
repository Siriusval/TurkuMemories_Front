/**
 * Pinpoint Map
 * Map used in /addmemory , so user can locate memory
 *
 */

// --- IMPORTS ---
import React, { useState } from 'react';
import { InteractiveMap, Marker, NavigationControl } from 'react-map-gl';
import { makeStyles, Theme, createStyles, Box } from '@material-ui/core';

// --- ICON INFO ---
const selectedIcon: string = '/images/marker-icon-red.png';
const iconSize: any = { width: 25, height: 41 };

// --- STYLES ---
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

// --- COMPONENT ---
interface IPinpointMap {
    handleClickPositionCallback(position: number[]): void;
}

const PinpointMap: React.FC<IPinpointMap> = ({
    handleClickPositionCallback,
}) => {
    //Contexts
    const classes = useStyles();

    //States
    const [marker, setMarker] = React.useState(null);
    const [viewport, setViewport] = useState({
        latitude: 60.455,
        longitude: 22.26,
        zoom: 13,
        bearing: 0,
        pitch: 0,
    });

    //Vars
    const mapStyle = 'mapbox://styles/mapbox/streets-v11';

    //Functions
    const handleClick = ({ lngLat: [longitude, latitude] }) => {
        setMarker({
            longitude,
            latitude,
            offsetLeft: -iconSize.width / 2,
            offsetTop: -iconSize.height,
        });
        handleClickPositionCallback([longitude, latitude]); //Callback
    };

    return (
        <InteractiveMap
            onClick={handleClick}
            {...viewport}
            mapStyle={mapStyle}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            width="40vw"
            height="40vh"
            onViewportChange={setViewport}
        >
            {/* Controls */}
            <div
                style={{
                    position: 'absolute',
                    right: 30,
                    bottom: 30,
                }}
            >
                <NavigationControl showCompass={false} />
            </div>
            {/* Marker */}
            {marker !== null ? (
                <Marker {...marker} className={classes.selectedMarker} />
            ) : null}
        </InteractiveMap>
    );
};

export default PinpointMap;
