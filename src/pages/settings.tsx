/**
 * Settings Page
 * User see his username and email
 * Can change his password (see auth0)
 */

// --- IMPORTS ---
import React from 'react';
import { withTranslation } from '../i18n';
import Link from 'next/link';
import { Button, TextField, Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import Head from 'next/head';

// --- COMPONENT ---
const Settings = ({ t, isLogged }) => {
    return (
        <div id="settings-page">
            {isLogged ? (
                <div>
                    <Head>
                        <title>Settings</title>
                    </Head>
                    <Layout>
                        <Typography variant="h3">{t('title')}</Typography>
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
                        {/*
                        <Link href="#" passHref>
                            <Button component="a">{t('passchange')}</Button>
                        </Link> */}
                    </Layout>
                </div>
            ) : null}
        </div>
    );
};

// --- POPULATE PAGE ---
Settings.getInitialProps = async ({ req }) => {
    return {
        namespacesRequired: ['common', 'settings'],
    };
};

export default withTranslation('settings')(Settings as any);
