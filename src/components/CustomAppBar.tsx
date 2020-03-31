/**
 * Custom App Bar Compoennt
 * Contain main elements for navigation
 * - Home
 * - Add Memory
 * - About Us
 * - Login / Account if logged
 * - Language Menu
 */

// --- IMPORTS ---
import React from 'react';
import Link from 'next/link';
import { withTranslation } from '../i18n';
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

// --- STYLES ---
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
    }),
);

// --- PROPS ---
interface ICustomAppBar {
    t(key, opts?): Function;
}

// --- COMPONENT ---
const CustomAppBar: React.FC<ICustomAppBar> = ({ t }) => {
    //Contexts
    const classes = useStyles();
    const authContext = useAuthContext();

    //Vars
    const logo = '/images/logo192.png';
    const turkuLogo = '/images/turku_logo_black.png';

    return (
        <AppBar id="app-bar" className={classes.root} position="fixed">
            <Toolbar>
                {/* Logo button to home */}
                <ButtonBase href="/" className={classes.homeButton}>
                    <img src={turkuLogo} height="44px" />
                </ButtonBase>
                <ButtonBase href="/" className={classes.homeButton}>
                    <img src={logo} height="44px" />
                </ButtonBase>

                {/* Space */}
                <Box className={classes.space} />

                {/* Add memory */}

                <Link href="/addmemory" passHref>
                    <Button
                        component="a"
                        variant="contained"
                        className={classes.nav}
                        color="primary"
                        aria-haspopup="true"
                        aria-label="Add a new memory"
                        startIcon={<AddIcon />}
                    >
                        {t('menubar.addmemory')}
                    </Button>
                </Link>

                {/* Home */}
                <Typography variant="h6">
                    <Link href="/" passHref>
                        <Button component="a" className={classes.nav}>
                            {t('menubar.home')}
                        </Button>
                    </Link>
                </Typography>

                {/* About Us */}
                <Typography variant="h6">
                    <Link href="/about" passHref>
                        <Button component="a" className={classes.nav}>
                            {t('menubar.about')}
                        </Button>
                    </Link>
                </Typography>

                {/* Login / Account */}
                <Typography variant="h6">
                    {!authContext.isLogged ? (
                        <Button
                            component="a"
                            href="https://localhost:4500/api/auth-management/login"
                            className={classes.nav}
                        >
                            {t('menubar.login')}
                        </Button>
                    ) : (
                        <Box className={classes.nav}>
                            <AccountMenu />
                        </Box>
                    )}
                </Typography>

                {/* Language */}
                <Typography variant="h6">
                    {/* Language Menu*/}
                    <LanguageMenu />
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withTranslation('common')(CustomAppBar as any);
