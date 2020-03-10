import React from 'react';
import { MemoryCard } from './MemoryCard';

export const MemoryList = props => {
    //Functions
    const generatelist = () => {
        const component = props.memories.map((memory, index) => (
            <MemoryCard
                key={index}
                memory={memory}
                handleSelectMemory={props.handleSelectMemory}
            />
        ));
        console.log('Memory list generated');
        return component;
    };

    return <div>{generatelist()}</div>;
};
