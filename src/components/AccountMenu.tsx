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
import React, { useEffect } from 'react';
import Router from 'next/router';
import { withTranslation } from '../i18n';
import {
    Button,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    ClickAwayListener,
} from '@material-ui/core';

interface IAccountMenu {
    isAdmin: boolean;
}
// --- COMPONENT ---
const AccountMenu: React.FC<IAccountMenu> = ({ isAdmin }) => {
    //State
    const [open, setOpen] = React.useState(false);

    //Anchor for menu
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    //Functions
    /**
     * Toggle menu on or off
     */
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
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
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleSettingsClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/settings');
    };
    const handleMyMemoriesClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/my_memories');
    };
    const handleAdminClick = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event);
        Router.push('/admin');
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
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleMyMemoriesClick}>
                                        My Memories
                                    </MenuItem>
                                    {isAdmin ? (
                                        <MenuItem onClick={handleAdminClick}>
                                            Admin
                                        </MenuItem>
                                    ) : null}

                                    <MenuItem onClick={handleSettingsClick}>
                                        Settings
                                    </MenuItem>
                                    <MenuItem
                                        component="a"
                                        href={
                                            process.env.BACK_URL +
                                            process.env.LOGOUT_URL
                                        }
                                    >
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

export default withTranslation('common')(AccountMenu as any);
