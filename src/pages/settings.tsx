/**
 * Settings Page
 * User see his username and email
 * Can change his password (see auth0)
 */

// --- IMPORTS ---
import React from 'react';
import CustomAppBar from '../components/CustomAppBar';
import { withTranslation } from '../i18n';
import Link from 'next/link';
import { Button, TextField, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

// --- COMPONENT ---
const Settings = ({ t }) => {
    return (
        <div id="settings-page">
            <Layout>
                <Typography variant="h3">{t('settingspage.stitle')}</Typography>
                <div style={{ height: '5vh' }} />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Username"
                    defaultValue="Bob"
                    variant="outlined"
                />
                <div style={{ height: '5vh' }} />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Email"
                    defaultValue="bob@bob.fi"
                    variant="outlined"
                />
                <div style={{ height: '5vh' }} />
                <Link href="#" passHref>
                    <Button component="a">{t('settingspage.passchange')}</Button>
                </Link>
            </Layout>
        </div>
    );
};

// --- POPULATE PAGE ---
Settings.getInitialProps = async ({ req }) => {
    return {
        namespacesRequired: ['common'],
    };
};

export default withTranslation('common')(Settings as any);
