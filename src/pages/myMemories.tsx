/**
 * Mymemories Page
 * User see his memories
 * Restricted, only is logged
 */

// --- IMPORTS ---
import React from 'react';
import { withTranslation } from '../i18n';
import { Typography, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import SimpleCard from '../components/SimpleCard';

// --- COMPONENT ---
const Mymemories = ({ t }) => {
    return (
        <div>
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

// --- POPULATE PAGE ---
Mymemories.getInitialProps = async ({ req }) => {
    return {
        namespacesRequired: ['common'],
    };
};

export default withTranslation('common')(Mymemories as any);
