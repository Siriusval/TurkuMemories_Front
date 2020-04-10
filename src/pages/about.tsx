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
import { Typography, Button } from '@material-ui/core';
import { useSnackbarContext } from '../contexts/SnackbarContext';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

// --- COMPONENT ---
const About: NextPage<any> = ({ t }) => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Layout>
                {/* Title */}
                <Typography variant="h3">{t('title')}</Typography>
                <div style={{ height: '5vh' }} />

                {/* Intro */}
                <Typography variant="body1">{t('intro.p1')}</Typography>
                <br />

                <Typography variant="body1">{t('intro.p2')}</Typography>
                <div style={{ height: '5vh' }} />

                {/* How it works */}
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
                <div style={{ height: '5vh' }} />

                {/* Notice */}
                <ul>
                    <li>
                        <Typography variant= "body1" gutterBottom>
                            {t('notice.p1')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant= "body1" gutterBottom>
                            {t('notice.p2')}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant= "body1" gutterBottom>
                            {t('notice.p3')}
                        </Typography>
                    </li>
                </ul>

                <div style={{ height: '5vh' }} />

                {/* Good opportunity */}
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

                <div style={{ height: '5vh' }} />

                {/* Who are we */}
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
                <div style={{ height: '5vh' }} />

                {/* What kind of memories */}
                <Typography variant="h5" gutterBottom>
                    {t('what.title')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('what.p1')}
                </Typography>
                <div style={{ height: '5vh' }} />
            </Layout>
        </div>
    );
};

//Populate page data
About.getInitialProps = async (ctx: NextPageContext) => ({
    namespacesRequired: ['common', 'about'],
});

export default withTranslation('about')(About as any);
