/**
 * Component used to display sample data while My Memory page is not working
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Memory } from '../types';
import { NextPage } from 'next';
import DeleteMemoryDialog from './DeleteMemoryDialog';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

interface IMemoryCard {
    memory: Memory;
    handleDeleteMemory(): void;
}
const MemoryCard: React.FC<IMemoryCard> = ({ memory, handleDeleteMemory }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/images/placeholder_small.jpg"
                    title="Memory Picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {memory.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {memory.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <DeleteMemoryDialog
                    handleDeleteMemory={handleDeleteMemory}
                    memoryId={memory.id}
                />
            </CardActions>
        </Card>
    );
};

export default MemoryCard;
