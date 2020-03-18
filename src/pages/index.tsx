/**
 * Map container component
 * Contain all the component in Map Page
 * aka. map canvas and overlay
 *
 * Ressources :
 * https://blog.logrocket.com/how-to-use-react-leaflet/
 * https://www.azavea.com/blog/2016/12/05/getting-started-with-react-and-leaflet/
 * https://cherniavskii.com/using-leaflet-in-react-apps/
 */
import React, { useState } from 'react';
import CustomAppBar from '../components/CustomAppBar';
import { apis } from '../services/apis';
import { i18n, withTranslation } from '../i18n';
import { Memories, Memory } from '../types';
import { NoSsr } from '@material-ui/core';
import { MapboxContainer } from '../components/MapboxContainer';
import { PinnedSubheaderList } from '../components/PinnedSubheaderList';
import { MemoryDetails } from '../components/MemoryDetails';

/*
  
                <div
                    style={{
                        paddingTop: "100px",
                        paddingBottom: "100px",
                        paddingLeft: "36px",
                    }}
                >
                    
                </div>
                */

const Index = ({ t, memories }) => {
    //console.log("Current language:", currentLanguage);
    const [selectedMemory, setSelectedMemory] = useState<Memory>(null);

    const handleSelectMemory = (memory: Memory) => {
        setSelectedMemory(memory);
    };
    const handleUnselectMemory = () => {
        setSelectedMemory(null);
    };
    return (
        <div>
            <CustomAppBar />
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
                    selectedMemory={selectedMemory}
                    handleSelectMemory={handleSelectMemory}
                />
            )}
        </div>
    ); //TODO : create placeholder when map loading  <PinnedSubheaderList />
};

Index.getInitialProps = async ({ req }) => {
    const currentLanguage: string = req ? req.language : i18n.language;

    let memories: Memories;
    await apis.memories
        .getAllMemories()
        .then(res => {
            memories = res.data;

            console.log('Memories fetched: ', memories.count);
        })
        .catch(err => console.error('Error fetching memories:', err));

    return {
        namespacesRequired: ['common'],
        currentLanguage,
        memories,
    };
};

export default withTranslation('common')(Index as any);
