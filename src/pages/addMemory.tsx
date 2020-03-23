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
import { AxiosError, AxiosResponse } from 'axios';
import { useSnackbarContext } from '../contexts/SnackbarContext';

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
    const snackbarContext = useSnackbarContext();
    //States
    const [markerPosition, setMarkerPosition] = useState<number[] | undefined>(
        undefined,
    );
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    //Vars
    const center = [60.455, 22.26];

    //Functions
    const handleClickPositionCallback = (position: number[]): void => {
        setMarkerPosition(position);
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
            .then((res: AxiosResponse) => {
                snackbarContext.displaySuccessSnackbar('Memory Added');
            })
            .catch((err: AxiosError) => {
                snackbarContext.displayErrorSnackbar('Error');
            });
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCategory(event.target.value);
    };
    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setDescription(event.target.value);
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

                                <form noValidate autoComplete="off">
                                    <TextField
                                        className={classes.item}
                                        required
                                        id="outlined-basic"
                                        label="Title"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        value={title}
                                        onChange={handleTitleChange}
                                    />
                                    <TextField
                                        className={classes.item}
                                        required
                                        id="outlined-basic"
                                        label="Category"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        value={category}
                                        onChange={handleCategoryChange}
                                    />
                                    <TextField
                                        id="outlined-multiline"
                                        label="Description"
                                        multiline
                                        rows="8"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        value={description}
                                        onChange={handleDescriptionChange}
                                    />
                                </form>
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
                                <PinpointMap
                                    handleClickPositionCallback={
                                        handleClickPositionCallback
                                    }
                                />
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
                            onClick={handleSubmit}
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
