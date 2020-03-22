/**
 * Display a panel containing informations
 * when memory is selected
 * Appears on home page
 */

// --- IMPORTS ---
import React from 'react';
import Moment from 'react-moment';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    Divider,
    Typography,
    Button,
    Paper,
    IconButton,
    Grid,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ShareSharpIcon from '@material-ui/icons/ShareSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import { Memory } from '../types';

// --- STYLES ---
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            height: '100%',
            position: 'absolute',
            top: '100px',
            borderRadius: '8px',
            marginLeft: theme.spacing(4),
            overflow: 'auto',
            maxHeight: 550,
        },
        buttonBack: {
            margin: theme.spacing(1),
        },
    }),
);

interface IMemoryDetails {
    handleUnselectMemory(): void;
    selectedMemory: Memory;
}

// --- COMPONENT ---
const MemoryDetails: React.FC<IMemoryDetails> = ({
    handleUnselectMemory,
    selectedMemory,
}) => {
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.root}>
            <List>
                <ListItem alignItems="flex-start">
                    <IconButton
                        aria-label="previous"
                        className={classes.buttonBack}
                        onClick={handleUnselectMemory}
                        color="secondary"
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </ListItem>

                {/*TODO : add picture */}
                <ListItem alignItems="flex-start">
                    <Typography variant="h3">{selectedMemory.title}</Typography>
                </ListItem>

                <ListItem alignItems="flex-start">
                    <Typography variant="subtitle1">
                        <Moment fromNow>{selectedMemory.createdAt}</Moment>
                    </Typography>
                </ListItem>
                <Divider variant="fullWidth" component="li" />

                <ListItem alignItems="flex-start">
                    <Typography variant="body2" align="left">
                        {selectedMemory.description}
                    </Typography>
                </ListItem>
                <Divider variant="fullWidth" component="li" />
                <ListItem>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<FavoriteSharpIcon />}
                            >
                                Favorite
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<ShareSharpIcon />}
                            >
                                Share
                            </Button>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </Paper>
    );
};
//<ReportModal /> TODO

export default MemoryDetails;
