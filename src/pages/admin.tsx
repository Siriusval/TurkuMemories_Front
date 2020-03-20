import React from 'react';
import CustomAppBar from '../components/CustomAppBar';
import { withTranslation } from '../i18n';
import { Typography } from '@material-ui/core';
import { Layout } from '../components/Layout';

const Admin = ({ t }) => {
    return (
        <div>
            <CustomAppBar />
            <Layout>
                <Typography variant="h3">Admin</Typography>
                <div style={{ height: '5vh' }} />
            </Layout>
        </div>
    );
};

Admin.getInitialProps = async ({ req }) => {
    return {
        namespacesRequired: ['common'],
    };
};

export default withTranslation('common')(Admin as any);
