/**
 * Mymemories Page
 * User see his memories
 * Restricted, only is logged
 */

// --- IMPORTS ---
import React, { useEffect } from 'react';
import Router from 'next/router';
import { withTranslation } from '../i18n';
import { Typography, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import MemoryCard from '../components/MemoryCard';

import { Memories } from '../types';
import { apis } from '../services/apis';
import { NextPage } from 'next';
import { getRedirectStatus } from 'next/dist/lib/check-custom-routes';

// --- COMPONENT ---
interface IMyMemories {
    t(key: string, opts?): string;
    myMemories: Memories;
    isLogged: boolean;
}
const MyMemories: NextPage<IMyMemories & any> = ({
    t,
    myMemories,
    isLogged,
}) => {
    useEffect(() => {
        window.location.href = process.env.LOGIN_URL;
    });

    return isLogged ? (
        <Layout>
            <Typography variant="h3">{t('memorypage.myMemories')}</Typography>
            <div style={{ height: '5vh' }} />

            <Grid container spacing={3}>
                {myMemories
                    ? myMemories.rows.map((memory, index) => {
                          return (
                              <Grid key={index} item xs={4}>
                                  <MemoryCard memory={memory} />
                              </Grid>
                          );
                      })
                    : null}
            </Grid>
        </Layout>
    ) : null;
};

// --- POPULATE PAGE ---
MyMemories.getInitialProps = async () => {
    let myMemories: Memories;
    await apis.memories
        .getUserMemories()
        .then(res => {
            myMemories = res.data;

            console.log('memories fetched: ', myMemories.count);
        })
        .catch(err => {
            console.error('Error fetching memories');
        });

    return {
        namespacesRequired: ['common'],
        myMemories: myMemories,
    };
};

export default withTranslation('common')(MyMemories as any);
