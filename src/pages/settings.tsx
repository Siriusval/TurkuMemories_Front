import React from 'react';
import CustomAppBar from '../components/CustomAppBar';
import { withTranslation } from '../i18n';
import Link from 'next/link';
import { Button, TextField, Typography } from '@material-ui/core';
import { Layout } from '../components/Layout';

const Settings = ({ t }) => {
    return (
        <div>
            <CustomAppBar />
            <Layout>
                <Typography variant="h3">Settings</Typography>
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
                    <Button component="a">Change password</Button>
                </Link>
            </Layout>
        </div>
    );
};

Settings.getInitialProps = async ({ req }) => {
    return {
        namespacesRequired: ['common'],
    };
};

export default withTranslation('common')(Settings as any);
