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
                <Typography variant="h3">{t('about.intro')}</Typography>
                <div style={{ height: '5vh' }} />

                {/* Who are we */}
                <Typography variant="h5">{t('about.who')}</Typography>
                <Typography variant="body1">{t('about.who_param1')}</Typography>
                <div style={{ height: '5vh' }} />

                {/* What kind of memory */}
                <Typography variant="h5">{t('about.who_param1')}</Typography>
                <Typography variant="body1">{t('about.what_param')}</Typography>
                <div style={{ height: '5vh' }} />

                {/* How to post memory */}
                <Typography variant="h5">{t('about.how')}</Typography>
                <Typography variant="body1">{t('about.how_param')}</Typography>
            </Layout>
        </div>
    );
};

About.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(About as any);
