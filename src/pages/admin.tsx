/**
 * Admin Page
 * WIP
 * Add category,
 * Review reported posts
 */

// --- IMPORTS ---
import React from 'react';
import { withTranslation } from '../i18n';
import { Typography } from '@material-ui/core';
import Layout from '../components/Layout';

// --- COMPONENT ---
const Admin = ({ t }) => {
    return (
        <div>
            <Layout>
                <Typography variant="h3">Admin</Typography>
                <div style={{ height: '5vh' }} />
            </Layout>
        </div>
    );
};

// --- POPULATE PAGE ---
Admin.getInitialProps = async ({ req }) => {
    return {
        namespacesRequired: ['common'],
    };
};

export default withTranslation('common')(Admin as any);
