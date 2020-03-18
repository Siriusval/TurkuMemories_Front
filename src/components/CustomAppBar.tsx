import React, { useState } from 'react';
import Link from 'next/link';
import { i18n, withTranslation } from '../i18n';
import {
    AppBar,
    Box,
    Button,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    ButtonBase,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const options: any[] = [
    { key: 'en', value: 'English' },
    { key: 'fi', value: 'Suomi' },
    { key: 'sv', value: 'Svensk' },
];
const logo = '/images/logo192.png';
const turkuLogo = '/images/turku_logo_black.png';

const CustomAppBar = ({ t, i18n }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const [selectedIndex, setSelectedIndex] = useState<string>(i18n.language);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        option: any,
    ) => {
        i18n.changeLanguage(option.key);
        setSelectedIndex(option.key);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <Link href="/login" passHref>
                        <Button component="a" className={classes.nav}>
                            {t('menubar.login')}
                        </Button>
                    </Link>
                </Typography>
                <Typography variant="h6">
                    {/* Language Menu*/}
                    <div>
                        <Button
                            aria-haspopup="true"
                            aria-controls="lock-menu"
                            aria-label="Change language"
                            onClick={handleClickListItem}
                            startIcon={<TranslateIcon />}
                            endIcon={<ExpandMoreIcon />}
                        >
                            {selectedIndex}
                        </Button>

                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {options.map((option, index) => (
                                <MenuItem
                                    key={option.key}
                                    selected={option.key === selectedIndex}
                                    onClick={event =>
                                        handleMenuItemClick(event, option)
                                    }
                                >
                                    {option.value}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withTranslation('common')(CustomAppBar as any);
