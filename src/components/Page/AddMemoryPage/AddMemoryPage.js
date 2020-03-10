/**
 * AddMemory Page
 * Opened when 'Add memory" but in navbar clicked
 * Displays a form for the user
 *
 * Ideas : https://www.blablacar.fr/offer-seats/1
 */
import React, { useContext, useState } from 'react';
import {
    Header,
    Form,
    Segment,
    Icon,
    Button,
    Grid,
    Select,
} from 'semantic-ui-react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { PageTemplate } from '../PageTemplate';
import { NotificationManager } from 'react-notifications';
import apis from '../../../api';
import HttpStatus from 'http-status-codes';
import CategoryContext from '../../../contexts/CategoryContext';

//replace formsy with formik
export const AddMemoryPage = () => {
    const context = useContext(CategoryContext);

    const center = [60.455, 22.26];
    const [markerPosition, setMarkerPosition] = useState([]);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleClickPosition = e => {
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
        setMarkerPosition([lat, lng]);
    };

    const handleSubmit = () => {
        apis.memories
            .createMemory({
                title: title,
                categoryId: category,
                content: description,
                position: {
                    type: 'Point',
                    coordinates: markerPosition,
                },
            })
            .then(res => {
                if (HttpStatus.CREATED) {
                    NotificationManager.success(
                        'Memory has been created',
                        'Success'
                    );
                    //this.props.history.push('/'); //TODO redirect
                }
            })
            .catch(err => {
                NotificationManager.error('Error creating memory', 'Error');
                console.error('Error creating memory:', err);
            });
    };
    return (
        <PageTemplate>
            {/* --- TITLE --- */}
            <Header as="h2" textAlign="left">
                Add a new Memory
            </Header>

            <Form onSubmit={handleSubmit}>
                <Grid columns={2}>
                    {/* --- COLUMN 1 --- */}
                    <Grid.Column>
                        {/* --- Informations --- */}
                        <Segment.Group>
                            <Segment textAlign="left">
                                <Header as="h3">Informations</Header>
                            </Segment>
                            <Segment
                                style={{ background: '#f9fafb' }}
                                textAlign="left"
                            >
                                {/* Title */}
                                <Form.Input
                                    fluid
                                    label="Title"
                                    placeholder="Example : Visit, Sunday Walk..."
                                    name="title"
                                    onChange={(e, { value }) => setTitle(value)}
                                />
                                <Form.Field
                                    control={Select}
                                    label="Category"
                                    options={context.categories}
                                    placeholder="Category"
                                    name="category"
                                    onChange={(e, { value }) =>
                                        setCategory(value)
                                    }
                                />

                                {/* Description */}
                                <Form.TextArea
                                    label="Description"
                                    placeholder="Tell us more about it..."
                                    type="text"
                                    rows={5}
                                    name="description"
                                    onChange={(e, { value }) =>
                                        setDescription(value)
                                    }
                                />
                            </Segment>
                        </Segment.Group>

                        {/* --- Image --- */}
                        <Segment.Group>
                            <Segment textAlign="left">
                                <Header as="h3">Image (Optional)</Header>
                            </Segment>
                            <Segment placeholder>
                                <Header icon>
                                    <Icon
                                        name="file image outline"
                                        style={{ height: 'auto' }}
                                    />
                                    Add an image for your memory.
                                </Header>
                                <Button primary>Add Document</Button>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>

                    {/* --- COLUMN 2 --- */}
                    <Grid.Column stretched>
                        <Segment>
                            {/* --- TITLE --- */}
                            <Header as="h3" textAlign="left">
                                Indicate position of the memory
                            </Header>

                            {/* --- MAP --- */}
                            <Map
                                center={center}
                                zoom={13.5}
                                layers=""
                                style={{
                                    position: 'relative',
                                    height: '92%',
                                    width: '100%',
                                }}
                                onClick={handleClickPosition}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {markerPosition.length !== 0 ? (
                                    <Marker position={markerPosition} />
                                ) : null}
                            </Map>
                        </Segment>
                    </Grid.Column>

                    {/* --- SUBMIT BUTTON --- */}
                    <Grid.Row centered>
                        <Form.Button type="submit">Continue</Form.Button>
                    </Grid.Row>
                </Grid>
            </Form>
        </PageTemplate>
    );
};
