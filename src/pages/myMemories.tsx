import React from 'react';
import CustomAppBar from '../components/CustomAppBar';
import { withTranslation } from '../i18n';
import { Typography, Grid } from '@material-ui/core';
import { Layout } from '../components/Layout';
import SimpleCard from '../components/SimpleCard';

const Mymemories = ({ t }) => {
    return (
        <div>
            <CustomAppBar />
            <Layout>
                <Typography variant="h3">My Memories</Typography>
                <div style={{ height: '5vh' }} />

                <Grid container spacing={3}>
                    {[...Array(10).keys()].map(() => {
                        return (
                            <Grid item xs={4}>
                                <SimpleCard />
                            </Grid>
                        );
                    })}
                </Grid>
            </Layout>
        </div>
    );
};

Mymemories.getInitialProps = async ({ req }) => {
    return {
        namespacesRequired: ['common'],
    };
};

export default withTranslation('common')(Mymemories as any);
