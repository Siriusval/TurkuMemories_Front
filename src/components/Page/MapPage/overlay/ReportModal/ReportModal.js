import React, { useState } from 'react';
import apis from '../../../../../api/index';
import { NotificationManager } from 'react-notifications';
import HttpStatus from 'http-status-codes';
import {
    Modal,
    Button,
    Container,
    TextArea,
    Input,
    Form,
} from 'semantic-ui-react';

export const ReportModal = props => {
    //States
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    //Vars
    const memory = props.memory;

    //Functions
    const handleTitleChange = (e, { value }) => {
        console.log('titlehandle');
        setTitle(value);
    };
    const handleDescriptionChange = (e, { value }) => {
        setDescription(value);
    };

    const submit = () => {
        //TODO : add form for title and description
        const payload = {
            memoryId: memory.id,
            userId: 1, //TODO : add user handling
            title: title,
            description: description,
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
                        `Error reporting memory : ${data}`,
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
    };

    return (
        <Modal
            size="mini"
            trigger={<Button icon="warning" size="mini" basic color="red" />}
        >
            {/* --- TITLE --- */}
            <Modal.Header>
                <Container textAlign="center">Report a Memory</Container>
            </Modal.Header>

            {/* --- CONTENT --- */}
            <Modal.Content>
                <Modal.Description>
                    {/* --- FORM --- */}
                    <Form onSubmit={submit}>
                        {/* Title */}
                        <h5>Title</h5>
                        <Input
                            name="title"
                            type="text"
                            required
                            fluid
                            onChange={handleTitleChange}
                        />
                        <br />
                        {/* Description */}
                        <h5>Description</h5>
                        <TextArea
                            name="description"
                            type="text"
                            required
                            onChange={handleDescriptionChange}
                        />
                        <br />

                        {/* --- LINKS --- */}
                        <Container textAlign="center">
                            <Button
                                type="submit"
                                disabled={!(title && description)}
                            >
                                Report
                            </Button>
                            <br />
                        </Container>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};
