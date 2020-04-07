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

import Popup from "reactjs-popup"
import {EmailIcon, FacebookIcon, TwitterIcon, WhatsappIcon, EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton} from 'react-share';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
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
                        Sample Memory
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Popup trigger={<Button size="small" color="primary">Share</Button>} modal>
                <div>
                <h2 style={{textAlign: 'center', borderBottomStyle:'solid', borderBottomColor:'grey'}}>Share this memory on social media</h2>
                <EmailShareButton url='http://localhost:3000/mymemories' body='Yo check out this memory at My Turku Memories'><EmailIcon size={50} round /></EmailShareButton>
                <WhatsappShareButton url='http://localhost:3000/mymemories' title='Yo check out this memory at My Turku Memories'><WhatsappIcon size={50} round /></WhatsappShareButton>
                <FacebookShareButton url='http://localhost:3000/mymemories' quote='Yo check out this memory at My Turku Memories'><FacebookIcon size={50} round /></FacebookShareButton>
                <TwitterShareButton url='http://localhost:3000/mymemories' title='Yo check out this memory at My Turku Memories'><TwitterIcon size={50} round /></TwitterShareButton>
                </div>
            </Popup>
                <Button size="small" color="secondary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
