import React, { Component } from 'react';
import { Button, Card, Image, Grid, Popup } from 'semantic-ui-react';
import apis from '../../../../api';
import Moment from 'react-moment';
import { NotificationManager } from 'react-notifications';
import HttpStatus from 'http-status-codes';

export class MemoryDetails extends Component {
    report(memory) {
        //TODO : add form for title and description
        const payload = {
            memoryId: memory.id,
            userId: 1, //TODO : add user handling
            title: '',
            description: '',
        };

        apis.memories
            .createMemoryReport(payload)
            .then(res => {
                // SUCCES
                console.log('SUCCES');
                console.log(res);

                if (
                    res.status === HttpStatus.OK ||
                    res.status === HttpStatus.CREATED
                ) {
                    NotificationManager.success('Memory reported', 'Success');
                }
            })
            .catch(error => {
                if (error.response) {
                    // ERROR: SERVER RESPONSE
                    console.log('ERROR: SERVER RESPONSE');

                    const data = error.response.data;
                    const status = error.response.status;

                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('data: ', data);
                    console.log('status: ', status);
                    console.log('headers: ', error.response.headers);

                    NotificationManager.error(
                        'Error reporting memory',
                        'Error'
                    );
                } else if (error.request) {
                    // ERROR: SERVER NO RESPONSE
                    console.log('ERROR: SERVER NO RESPONSE');

                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // ERROR: REQUEST ERROR
                    console.log('ERROR: REQUEST ERROR');

                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                //ERROR: CONFIG
                console.log('ERROR: CONFIG');
                console.log(error.config);
            });
    }
    render() {
        const memory = this.props.memory;
        return (
            <div>
                <Button
                    icon="chevron left"
                    labelPosition="left"
                    content="Back"
                    onClick={this.props.handleUnselectMemory}
                />
                <Card fluid>
                    <Image src="" wrapped />
                    <Card.Content>
                        <Card.Header>{memory.title}</Card.Header>
                        <Card.Meta>
                            <span className="date">
                                <Moment fromNow>{memory.createdAt}</Moment>
                            </span>
                        </Card.Meta>
                        <Card.Description>{memory.content}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Grid textAlign="center" columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button
                                        color="red"
                                        content="Like"
                                        icon="heart"
                                        label={{
                                            basic: true,
                                            color: 'red',
                                            pointing: 'left',
                                            content: '27',
                                        }}
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <Button
                                        color="blue"
                                        content="Share"
                                        icon="share alternate"
                                        label={{
                                            basic: true,
                                            color: 'blue',
                                            pointing: 'left',
                                            content: '13',
                                        }}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
                <Popup
                    content="Report memory"
                    trigger={
                        <Button
                            icon="warning"
                            size="mini"
                            basic
                            color="red"
                            onClick={() => this.report(memory)}
                        />
                    }
                    position="bottom left"
                />
            </div>
        );
    }
}
