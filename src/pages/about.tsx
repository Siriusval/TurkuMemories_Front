/**
 * Page about us
 * Displays some informations about the website and the museum
 *
 * Contain an accordion item and logic
 */
import React from 'react';

import { withTranslation } from '../i18n';
import { Layout } from '../components/Layout';
import { Typography } from '@material-ui/core';
import CustomAppBar from '../components/CustomAppBar';

const About = ({ t }) => {
    //States

    return (
        <div>
            <CustomAppBar />

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

About.getInitialProps = async () => ({
    namespacesRequired: ['common', 'about'],
});

export default withTranslation('about')(About as any);
