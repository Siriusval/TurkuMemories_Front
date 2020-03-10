/**
 * MemoryCard displaying memory informations
 * One per memory
 */
import React from 'react';
import { Card } from 'semantic-ui-react';
import Moment from 'react-moment';

export const MemoryCard = props => {
    //Vars
    const memory = props.memory;
    const content = memory.content.slice(0, 100) + '...';

    return (
        <Card
            color="teal"
            fluid
            onClick={() => props.handleSelectMemory(memory)}
        >
            <Card.Content>
                <Card.Header>{memory.title}</Card.Header>
                <Card.Meta>
                    <span className="date">
                        <Moment fromNow>{memory.createdAt}</Moment>
                    </span>
                </Card.Meta>
                <Card.Description>{content}</Card.Description>
            </Card.Content>
        </Card>
    );
};
