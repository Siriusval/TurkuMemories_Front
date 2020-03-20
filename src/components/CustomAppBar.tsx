import React, { useState } from 'react';
import Link from 'next/link';
import { i18n, withTranslation } from '../i18n';
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    ButtonBase,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import { useAuthContext } from '../contexts/AuthContext';

import AccountMenu from './AccountMenu';
import LanguageMenu from './LanguageMenu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        homeButton: {
            marginRight: theme.spacing(2),
        },
        space: {
            flexGrow: 1,
        },
        nav: {
            marginRight: theme.spacing(2),
        },
        languageMenu: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        addMemoryButton: {
            backgroundColor: '#00a97a',
            color: '#ffffff',
            marginRight: theme.spacing(2),
            '&:hover': {
                backgroundColor: '#028a61',
                color: '#ffffff',
            },
        },
    }),
);

const logo = '/images/logo192.png';
const turkuLogo = '/images/turku_logo_black.png';

const CustomAppBar = ({ t }) => {
    const classes = useStyles();
    const authContext = useAuthContext();

    return (
        <AppBar className={classes.root} position="fixed">
            <Toolbar>
                <ButtonBase href="/" className={classes.homeButton}>
                    <img src={turkuLogo} height="44px" />
                </ButtonBase>
                <ButtonBase href="/" className={classes.homeButton}>
                    <img src={logo} height="44px" />
                </ButtonBase>
                <Box className={classes.space} />
                <Link href="/addMemory" passHref>
                    <Button
                        component="a"
                        variant="contained"
                        className={classes.nav}
                        color="primary"
                        aria-haspopup="true"
                        aria-label="Add a new memory"
                        startIcon={<AddIcon />}
                    >
                        Add Memory
                    </Button>
                </Link>

                <Typography variant="h6">
                    <Link href="/" passHref>
                        <Button component="a" className={classes.nav}>
                            {t('menubar.home')}
                        </Button>
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link href="/about" passHref>
                        <Button component="a" className={classes.nav}>
                            {t('menubar.about')}
                        </Button>
                    </Link>
                </Typography>
                <Typography variant="h6">
                    {!authContext.isLogged ? (
                        <Link href="/login" passHref>
                            <Button component="a" className={classes.nav}>
                                {t('menubar.login')}
                            </Button>
                        </Link>
                    ) : (
                        <Box className={classes.nav}>
                            <AccountMenu />
                        </Box>
                    )}
                </Typography>
                <Typography variant="h6">
                    {/* Language Menu*/}
                    <LanguageMenu />
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withTranslation('common')(CustomAppBar as any);
