/**
 * InfoSegment displaying most recent memories
 * or memory details when clicked
 *
 * Contain MemoryCard components as childrens
 */
import React from 'react';
import { Segment } from 'semantic-ui-react';
import { MemoryList } from './MemoryList';
import { MemoryDetails } from './MemoryDetails';

/**
 * Style css of container
 */
const segmentStyle = {
    zIndex: 1,
    position: 'absolute',
    width: '400px',
    top: '130px',
    left: '20px',
    height: 'calc(79vh)',
    overflow: 'auto',
    padding: '18px',
    textAlign: 'left',
};

export const InfoSegment = props => {
    //Functions

    const renderContent = () => {
        const selectedMemory = props.selectedMemory;

        if (props.loading) {
            return null;
        }

        if (selectedMemory) {
            return (
                <MemoryDetails
                    handleUnselectMemory={props.handleUnselectMemory}
                    memory={selectedMemory}
                />
            );
        } else {
            return (
                <MemoryList
                    memories={props.memories}
                    handleSelectMemory={props.handleSelectMemory}
                />
            );
        }
    };

    return (
        <Segment style={segmentStyle} raised loading={props.loading}>
            {renderContent()}
        </Segment>
    );
};
