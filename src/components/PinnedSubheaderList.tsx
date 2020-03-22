/**
 * List all memories in a list
 * Li are clickable elements
 * Appears on home page
 */

// --- IMPORTS ---
import React from 'react';
import { Memories, Memory } from '../types';
import {
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Paper,
} from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

// --- STYLES ---
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '8px',
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            position: 'absolute',
            top: '100px',
            marginLeft: theme.spacing(4),
            overflow: 'auto',
            maxHeight: 550,
        },
        list: {},
        listSection: {
            backgroundColor: 'inherit',
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
        },
        subheader: {
            paddingLeft: '0px',
            paddingRight: '0px',
            textAlign: 'center',
        },
    }),
);

interface IPinnedSubheaderList {
    memories: Memories;
    handleSelectMemory(memory: Memory): void;
}

// --- COMPONENT ---
const PinnedSubheaderList: React.FC<IPinnedSubheaderList> = ({
    memories,
    handleSelectMemory,
}) => {
    //Contexts
    const classes = useStyles();

    //Functions
    const handleClickListItem = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ): void => {
        handleSelectMemory(memories['rows'][index]);
    };

    const generateMemoryList = () => {
        memories['rows'].map((memory, index) => {
            const content = memory.description!.slice(0, 100) + '...';

            return (
                <ListItem
                    button
                    key={memory.id}
                    onClick={event => handleClickListItem(event, index)}
                >
                    <ListItemText primary={memory.title} secondary={content} />
                </ListItem>
            );
        });
    };
    return (
        <Paper elevation={4} className={classes.root}>
            {/* Header */}
            <List subheader={<li />}>
                {[0].map(sectionId => (
                    <li
                        key={`section-${sectionId}`}
                        className={classes.listSection}
                    >
                        <ul className={classes.ul}>
                            <ListSubheader className={classes.subheader}>
                                <Paper>Memories</Paper>
                            </ListSubheader>

                            {/* List or error message */}
                            {memories ? (
                                generateMemoryList()
                            ) : (
                                <ListItem>
                                    <ListItemText
                                        primary="Error"
                                        secondary="Memories not found"
                                    />
                                </ListItem>
                            )}
                        </ul>
                    </li>
                ))}
            </List>
        </Paper>
    );
};
export default PinnedSubheaderList;
