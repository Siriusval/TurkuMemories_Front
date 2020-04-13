import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import { apis } from '../../services/apis';
import { Memory } from '../../types';
import MemoryCard from '../../components/MemoryCard';

const SharedMemory = ({ memory }) => {
    return (
        <div>
            <Head>
                <title>Shared Memory</title>
            </Head>

            <Layout>
                {memory ? (
                    <MemoryCard memory={memory} controls={false} />
                ) : (
                    <h1>Memory doesn't exist</h1>
                )}
            </Layout>
        </div>
    );
};

// ---POPULATE PAGE  ---
SharedMemory.getInitialProps = async ({ query }) => {
    const { memoryId } = query;
    let memory: Memory;
    await apis.memories
        .getMemoryById(memoryId)
        .then((res) => {
            memory = res.data;
        })
        .catch((err) => {
            console.log(err);
        });

    return {
        namespacesRequired: ['common'],
        memory: memory,
    };
};

export default withTranslation('common')(SharedMemory as any);
