/**
 * Page about us
 * Displays some informations about the website and the museum
 *
 * Contain an accordion item and logic
 */

// --- IMPORTS ---
import React from 'react';
import { withTranslation } from '../i18n';
import Layout from '../components/Layout';
import {
    Typography,
    Paper,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core';
import { NextPage, NextPageContext, GetStaticProps } from 'next';
import Head from 'next/head';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: '1.5rem',
            borderRadius: '8px',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

// --- COMPONENT ---
const About: NextPage<any> = ({ t }) => {
    const classes = useStyles();

    const Intro = () => {
        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="body1">{t('intro.p1')}</Typography>
                <br />

                <Typography variant="body1">{t('intro.p2')}</Typography>
            </Paper>
        );
    };

    const HowItWorks = () => {
        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {t('how.title')}
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('how.p1')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('how.p2')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('how.p3')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('how.p4')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('how.p5')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('how.p6')}
                        </Typography>
                    </li>
                </ul>
            </Paper>
        );
    };

    const Notice = () => {
        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {t('notice.title')}
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('notice.p1')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('notice.p2')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('notice.p3')}
                        </Typography>
                    </li>
                </ul>
            </Paper>
        );
    };

    const GoodOpportunity = () => {
        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {t('opportunity.title')}
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('opportunity.p1')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('opportunity.p2')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            {t('opportunity.p3')}
                        </Typography>
                    </li>
                </ul>
            </Paper>
        );
    };

    const WhoAreWe = () => {
        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {t('who.title')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('who.p1')}
                </Typography>
                <div style={{ height: '5vh' }} />

                {/* Rights to content */}
                <Typography variant="h5" gutterBottom>
                    {t('rights.title')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('rights.p1')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('rights.p2')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('rights.p3')}
                </Typography>
            </Paper>
        );
    };

    const WhatKindOfMemory = () => {
        return (
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {t('what.title')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('what.p1')}
                </Typography>
            </Paper>
        );
    };

    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Layout>
                {/* Title */}
                <Typography variant="h3" gutterBottom>
                    {t('title')}
                </Typography>
                <Intro />
                <div style={{ height: '5vh' }} />
                <HowItWorks />
                <div style={{ height: '5vh' }} />
                <Notice />
                <div style={{ height: '5vh' }} />
                <GoodOpportunity />
                <div style={{ height: '5vh' }} />
                <WhoAreWe />
                <div style={{ height: '5vh' }} />
                <WhatKindOfMemory />
            </Layout>
        </div>
    );
};

//Populate page data
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: { namespacesRequired: ['common', 'about'] },
    };
};

export default withTranslation('about')(About as any);
