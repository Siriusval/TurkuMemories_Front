/**
 * Mymemories Page
 * User see his memories
 * Restricted, only is logged
 */

// --- IMPORTS ---
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { withTranslation } from '../i18n';
import { Typography, Grid, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

import Layout from '../components/Layout';
import MemoryCard from '../components/MemoryCard';

import { Memories } from '../types';
import { apis } from '../services/apis';
import { NextPage } from 'next';
import { getRedirectStatus } from 'next/dist/lib/check-custom-routes';
import Head from 'next/head';
import { useSnackbarContext } from '../contexts/SnackbarContext';

// --- COMPONENT ---
interface IMyMemories {
    t(key: string, opts?): string;
    isLogged: boolean;
}
const MyMemories: NextPage<IMyMemories & any> = ({ t, isLogged }) => {
    const snackbarContext = useSnackbarContext();

    const [userMemories, setUserMemories] = useState<Memories | null>(null);

    const getUserMemories = async () => {
        let tempMemories: Memories;
        await apis.memories
            .getUserMemories()
            .then((res) => {
                tempMemories = res.data;
                console.log('memories fetched: ', tempMemories.count);
                setUserMemories(tempMemories);
            })
            .catch((err) => {
                console.error('Error fetching memories', err);
            });
    };

    const handleDeleteMemory = (index: number, memoryId: number) => {
        apis.memories
            .deleteMemoryById(memoryId)
            .then((res) => {
                const newMemories = userMemories;
                newMemories.rows.splice(index, 1);
                setUserMemories(newMemories);
                snackbarContext.displaySuccessSnackbar('memoryDeleted');
            })
            .catch((err) => {
                snackbarContext.displayErrorSnackbar('Error deleting memory');
            });
    };

    const displayMemories = () => {
        let component;

        if (userMemories === null || userMemories.count === 0) {
            component = (
                <Grid item xs={4}>
                    <Card style={{ minWidth: '200px' }}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Error
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                No memories to display.
                                <br />
                                Try adding one with
                                <br />
                                "+ ADD MEMORY" button
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        } else {
            component = userMemories.rows.map((memory, index) => {
                return (
                    <Grid key={index} item xs={4}>
                        <MemoryCard
                            handleDeleteMemory={() =>
                                handleDeleteMemory(index, memory.id)
                            }
                            memory={memory}
                            controls={true}
                        />
                    </Grid>
                );
            });
        }
        return component;
    };
    useEffect(() => {
        if (!isLogged) {
            window.location.href = process.env.BACK_URL + process.env.LOGIN_URL;
        } else {
            getUserMemories();
        }
    }, []);

    return (
        <div>
            {isLogged ? (
                <div>
                    <Head>
                        <title>My Memories</title>
                    </Head>
                    <Layout>
                        <Typography variant="h3">
                            {t('memorypage.myMemories')}
                        </Typography>
                        <div style={{ height: '5vh' }} />

                        <Grid container spacing={3}>
                            {displayMemories()}
                        </Grid>
                    </Layout>
                </div>
            ) : null}
        </div>
    );
};

// --- POPULATE PAGE ---
MyMemories.getInitialProps = async (ctx: any) => {
    return {
        namespacesRequired: ['common'],
    };
};

export default withTranslation('common')(MyMemories as any);
