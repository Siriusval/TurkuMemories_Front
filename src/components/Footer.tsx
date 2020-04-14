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
    Grid,
} from '@material-ui/core';

// --- COMPONENT ---
const Footer: React.FC = () => {
    return (
        <div style={{ padding: '64px 24px' }}>
            <Grid container direction="row">
                <Grid item xs={3}>
                    Museum of Turku
                </Grid>
                <Grid item xs={3}>
                    Partnership
                </Grid>
                <Grid item xs={3}>
                    Contact
                </Grid>
                <Grid item xs={3}>
                    Privacy Policy <br />
                    Terms of Use
                </Grid>
            </Grid>

            <p>
                All rights reserved. Copyright ©{new Date().getFullYear()}{' '}
                Museum of Turku.
            </p>
        </div>
    );
};

export default Footer;
