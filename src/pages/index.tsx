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
import { Memories, Memory, Categories } from '../types';
import { NoSsr } from '@material-ui/core';
import MapboxContainer from '../components/MapboxContainer';
import PinnedSubheaderList from '../components/PinnedSubheaderList';
import MemoryDetails from '../components/MemoryDetails';
import { useSnackbarContext } from '../contexts/SnackbarContext';

// --- COMPONENT ---
const Index = ({ t, memories, categories, isLogged }) => {
    console.log('isLogged Index', isLogged);
    //Contexts
    const snackbarContext = useSnackbarContext();

    //States
    const [selectedMemory, setSelectedMemory] = useState<Memory>(null);

    const [isFiltered, setIsFiltered] = useState<boolean>(false);

    const [unFilteredMemories, setUnFilteredMemories] = useState<Memories>(
        memories,
    );
    const [filteredMemories, setFilteredMemories] = useState<Memories>(null);

    //functions
    const handleSelectMemory = (memory: Memory) => {
        setSelectedMemory(memory);
    };
    const handleUnselectMemory = () => {
        setSelectedMemory(null);
    };

    const handleCategoryFilterChange = (categoryId: string) => {
        if (categoryId === '') {
            setIsFiltered(false);
        } else {
            apis.memories
                .getMemoriesByCategory(categoryId)
                .then(res => {
                    setFilteredMemories(res.data);
                    snackbarContext.displaySuccessSnackbar('Filter Applied');
                })
                .catch(err => {
                    snackbarContext.displayWarningSnackbar(
                        'No memories in this category',
                    );
                    console.log(err);
                });
            setIsFiltered(true);
        }
    };

    const getMemories = () => {
        return isFiltered ? filteredMemories : unFilteredMemories;
    };
    return (
        <div>
            {/* Only rendered client side */}
            <NoSsr>
                <MapboxContainer
                    memories={getMemories()}
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
                    memories={getMemories()}
                    handleSelectMemory={handleSelectMemory}
                    categories={categories}
                    handleCategoryFilterChange={handleCategoryFilterChange}
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
        .catch(err => console.error('Error fetching memories', err));

    let categories: Categories;
    await apis.categories
        .getAllCategories()
        .then(res => {
            categories = res.data.categories;

            console.log('Categories fetched: ', categories.length);
        })
        .catch(err => console.error('Error fetching categories'));

    return {
        namespacesRequired: ['common'],
        currentLanguage,
        memories,
        categories,
    };
};

export default withTranslation('common')(Index as any);
