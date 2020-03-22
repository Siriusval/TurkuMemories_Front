/**
 * AddMemory Page
 * Opened when 'Add memory" but in navbar clicked
 * Displays a form for the user
 *
 * Ideas : https://www.blablacar.fr/offer-seats/1
 */

// --- IMPORTS ---
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { apis } from '../services/apis';
import HttpStatus from 'http-status-codes';
import { Memory } from '../types';
import { withTranslation } from '../i18n';
import {
    Typography,
    Grid,
    Paper,
    TextField,
    Box,
    Button,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PinpointMap from '../components/PinpointMap';

// --- STYLES ---
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            paddingTop: '16px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: '16px',
        },
        item: {
            paddingBottom: '16px',
        },
        paper: {
            borderRadius: '8px',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

// --- COMPONENTS ---
const AddMemory = ({ t }) => {
    // TODO:replace formsy with formik
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
                    //TODO sucess snackbar
                    //this.props.history.push('/'); //TODO redirect
                }
            })
            .catch(err => {
                //TODO error snackbar

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
            {/* --- TITLE --- */}
            <Typography variant="h3">Add a new memory</Typography>
            <div style={{ height: '5vh' }} />
            {/* MAIN GRID */}
            <Grid
                container
                direction="column"
                spacing={2}
                justify="flex-start"
                alignItems="center"
            >
                {/* FIRST ROW */}
                <Grid
                    container
                    item
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    {/* LEFT ELEMENT */}
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={4}>
                            <Box className={classes.box}>
                                <Typography
                                    variant="body1"
                                    className={classes.item}
                                >
                                    Informations
                                </Typography>
                                <TextField
                                    className={classes.item}
                                    required
                                    id="outlined-basic"
                                    label="Title"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.item}
                                    required
                                    id="outlined-basic"
                                    label="Category"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />

                                <TextField
                                    id="outlined-multiline"
                                    label="Description"
                                    multiline
                                    rows="8"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />
                            </Box>
                        </Paper>
                    </Grid>

                    {/* RIGHT ELEMENT */}
                    <Grid container item xs={6}>
                        <Paper className={classes.paper} elevation={4}>
                            <Box className={classes.box}>
                                <Typography
                                    variant="body1"
                                    className={classes.item}
                                >
                                    Position
                                </Typography>
                                <PinpointMap />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                {/* SECOND ROW */}
                <Grid container item xs={12} justify="center">
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
};

AddMemory.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(AddMemory as any); //TODO : create namespace for each page
