import React from 'react';
import { Message } from 'semantic-ui-react';
import { MemoryCard } from './MemoryCard';

export const MemoryList = props => {
    //Functions
    const generatelist = () => {
        let component = null;
        if (props.memories.length !== 0) {
            component = props.memories.map((memory, index) => (
                <MemoryCard
                    key={index}
                    memory={memory}
                    handleSelectMemory={props.handleSelectMemory}
                />
            ));
        } else {
            component = (
                <Message>
                    <Message.Header>No memory to display</Message.Header>
                    <p>Try to remove some filters.</p>
                </Message>
            );
        }
        console.log('Memory list generated');
        return component;
    };

    return <div>{generatelist()}</div>;
};
