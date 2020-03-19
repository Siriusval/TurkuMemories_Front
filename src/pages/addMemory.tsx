/**
 * AddMemory Page
 * Opened when 'Add memory" but in navbar clicked
 * Displays a form for the user
 *
 * Ideas : https://www.blablacar.fr/offer-seats/1
 */
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { NotificationManager } from 'react-notifications';
import { apis } from '../services/apis';
import HttpStatus from 'http-status-codes';

import { Memory } from '../types';
import { withTranslation } from '../i18n';
import CustomAppBar from '../components/CustomAppBar';
import { Typography, Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            borderRadius: '8px',
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            marginLeft: theme.spacing(2),
        },
    }),
);

//replace formsy with formik
const AddMemory = ({ t }) => {
    //Contexts
    const classes = useStyles();
    //States
    const [markerPosition, setMarkerPosition] = useState<number[] | undefined>(
        undefined,
    );
    const [category, setCategory] = useState<undefined>(undefined);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    //Vars
    const center = [60.455, 22.26];

    //Functions
    const handleClickPosition = (e: any): void => {
        const latLng: number[] = e.latlng;
        setMarkerPosition(latLng);
    };

    const handleSubmit = (): void => {
        const data = {
            title: title,
            category: category,
            description: description,
            position: {
                type: 'Point',
                coordinates: markerPosition!,
            },
        };
        const memory = data;

        apis.memories
            .createMemory(memory)
            .then(_ => {
                if (HttpStatus.CREATED) {
                    NotificationManager.success(
                        'Memory has been created',
                        'Success',
                    );
                    //this.props.history.push('/'); //TODO redirect
                }
            })
            .catch(err => {
                NotificationManager.error('Error creating memory', 'Error');
                console.error('Error creating memory:', err);
            });
    };

    const handleChangeDescription = (
        _: React.FormEvent<HTMLTextAreaElement>,
        { value }: any,
    ): void => {
        if (value) {
            setDescription(value.toString());
        }
    };

    return (
        <Layout>
            <CustomAppBar />
            {/* --- TITLE --- */}
            <Typography variant="h3">Add a new memory</Typography>
            <div style={{ height: '5vh' }} />
            <Grid container direction="row" spacing={1}>
                <Grid container item xs={6} direction="column" spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={4}>
                            <Typography variant="body1">Title</Typography>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={4}>
                            <Typography variant="body1">Category</Typography>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={4}>
                            <Typography variant="body1">Description</Typography>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Description"
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={4}>
                            <Typography variant="body1">Image</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={6} direction="column" spacing={3}>
                    <Paper className={classes.paper} elevation={4}>
                        a
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};

/*
<Grid container xs={6} spacing={3}></Grid>
                <Grid columns={2}>
                     --- COLUMN 1 --- 
                    <Grid.Column>
                         --- Informations --- 
                        <Segment.Group>
                            <Segment textAlign="left">
                                <Header as="h3">Informations</Header>
                            </Segment>
                            <Segment
                                style={{ background: '#f9fafb' }}
                                textAlign="left"
                            >
                                 Title }
                                <Form.Input
                                    fluid
                                    label="Title"
                                    placeholder="Example : Visit, Sunday Walk..."
                                    name="title"
                                    onChange={(_, { value }) => setTitle(value)}
                                />
                                <Form.Field
                                    control={Select}
                                    label="Category"
                                    options={categoryContext.categories}
                                    placeholder="Category"
                                    name="category"
                                    onChange={(
                                        _: React.ChangeEvent,
                                        { value }: any,
                                    ) => setCategory(value)}
                                />

                                 Description }
                                <Form.TextArea
                                    label="Description"
                                    placeholder="Tell us more about it..."
                                    type="text"
                                    rows={5}
                                    name="description"
                                    onChange={(
                                        e: React.FormEvent<HTMLTextAreaElement>,
                                        data: TextAreaProps,
                                    ) => handleChangeDescription(e, data)}
                                />
                            </Segment>
                        </Segment.Group>

                         --- Image --- }
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

                     --- COLUMN 2 --- }
                    <Grid.Column stretched>
                        <Segment>
                             --- TITLE --- }
                            <Header as="h3" textAlign="left">
                                Indicate position of the memory
                            </Header>

                             
                            <Map
                                center={center}
                                zoom={13.5}
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
                                {markerPosition ? (
                                    <Marker position={markerPosition} />
                                ) : null}
                            </Map>
                            }
                        </Segment>
                    </Grid.Column>

                     --- SUBMIT BUTTON --- }
                    <Grid.Row centered>
                        <Form.Button type="submit">Continue</Form.Button>
                    </Grid.Row>
                </Grid>

*/

AddMemory.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(AddMemory as any);
