/**
 * Index  / Home Page
 * Contains :
 * - Map  (MapboxContainer)
 * - list of most recent memories (PinnedSubheaderList)
 */

// --- IMPORTS ---
import React, { useState } from 'react';
import { apis } from '../services/apis';
import { i18n, withTranslation } from '../i18n';
import { Memories, Memory } from '../types';
import { NoSsr } from '@material-ui/core';
import MapboxContainer from '../components/MapboxContainer';
import PinnedSubheaderList from '../components/PinnedSubheaderList';
import MemoryDetails from '../components/MemoryDetails';

// --- COMPONENT ---
const Index = ({ t, memories }) => {
    //States
    const [selectedMemory, setSelectedMemory] = useState<Memory>(null);

    //functions
    const handleSelectMemory = (memory: Memory) => {
        setSelectedMemory(memory);
    };
    const handleUnselectMemory = () => {
        setSelectedMemory(null);
    };
    return (
        <div>
            {/* Only rendered client side */}
            <NoSsr>
                <MapboxContainer
                    memories={memories}
                    selectedMemory={selectedMemory}
                    handleSelectMemory={handleSelectMemory}
                />
            </NoSsr>
            {selectedMemory ? (
                <MemoryDetails
                    selectedMemory={selectedMemory}
                    handleUnselectMemory={handleUnselectMemory}
                />
            ) : (
                <PinnedSubheaderList
                    memories={memories}
                    handleSelectMemory={handleSelectMemory}
                />
            )}
        </div>
    ); //TODO : create placeholder when map loading  <PinnedSubheaderList />
};

// --- POPULATE PAGE ---
/**
 * Fetch memories from back
 */
Index.getInitialProps = async ({ req }) => {
    const currentLanguage: string = req ? req.language : i18n.language;

    let memories: Memories;
    await apis.memories
        .getAllMemories()
        .then(res => {
            memories = res.data;

            console.log('Memories fetched: ', memories.count);
        })
        .catch(err => console.error('Error fetching memories'));

    return {
        namespacesRequired: ['common'],
        currentLanguage,
        memories,
    };
};

export default withTranslation('common')(Index as any);
