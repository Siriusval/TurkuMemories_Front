import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { Memory, Memories } from '../types';
import {
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    CircularProgress,
    Paper,
} from '@material-ui/core';
import { withTranslation } from '../i18n';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '8px',
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            position: 'absolute',
            top: '100px',
            marginLeft: theme.spacing(2),
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

export const PinnedSubheaderList = props => {
    console.log(props);

    const classes = useStyles();
    const memories: Memories = props.memories;

    const handleClickListItem = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ): void => {
        props.handleSelectMemory(memories['rows'][index]);
    };

    return (
        <Paper elevation={4} className={classes.root}>
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

                            {memories['rows'].map((memory, index) => {
                                const content =
                                    memory.description!.slice(0, 100) + '...';

                                return (
                                    <ListItem
                                        button
                                        key={memory.id}
                                        onClick={event =>
                                            handleClickListItem(event, index)
                                        }
                                    >
                                        <ListItemText
                                            primary={memory.title}
                                            secondary={content}
                                        />
                                    </ListItem>
                                );
                            })}
                        </ul>
                    </li>
                ))}
            </List>
        </Paper>
    );
};
