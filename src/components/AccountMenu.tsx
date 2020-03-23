/**
 * Account Menu Component
 *
 * Showed when user is logged in
 * Display choice between :
 * - My memories
 * - Settings
 *  - Logout
 */

// --- IMPORTS ---
import React from 'react';
import Router from 'next/router';
import {
    Button,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    ClickAwayListener,
} from '@material-ui/core';
import { withTranslation } from '../i18n';

// --- COMPONENT ---
const AccountMenu: React.FC = () => {
    //State
    const [open, setOpen] = React.useState(false);

    //Anchor for menu
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    //Functions
    /**
     * Toggle menu on or off
     */
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    /**
     * Close menu on click
     */
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };

    /**
     * Close menu on tab key down
     */
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleSettingsClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/settings');
    };
    const handleMymemoriesClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/mymemories');
    };
    const handleAdminClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/admin'); //TODO : logout
    };
    const handleLoginClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/login');
    };
    const handleLogoutClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/'); //TODO : logout
    };
    return (
        <div id="account-menu">
            {/* Account button */}
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                Account
            </Button>
            {/* Popup Menu */}

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom',
                        }}
                    >
                        {/* Content */}

                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleMymemoriesClick}>
                                        My Memories
                                    </MenuItem>
                                    <MenuItem onClick={handleAdminClick}>
                                        Admin
                                    </MenuItem>
                                    <MenuItem onClick={handleSettingsClick}>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleLoginClick}>
                                        Login
                                    </MenuItem>
                                    <MenuItem onClick={handleLogoutClick}>
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default withTranslation('common')(AccountMenu);
