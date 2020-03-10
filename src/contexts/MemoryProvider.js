import React, { useState, useEffect } from 'react';
import MemoryContext from './MemoryContext';
import apis from '../api/index';
const MemoryProvider = props => {
    const [memories, setMemories] = useState([]);
    const [loadingMemories, setLoadingMemories] = useState(true);
    const [selectedMemory, setSelectedMemory] = useState(null);

    /**
     * Call API to get memories
     */
    const fetchMemories = () => {
        apis.memories
            .getAllMemories()
            .then(res => {
                const memoriesTemp = [];
                res.data['rows'].forEach(element => {
                    const memory = element;
                    memoriesTemp.push(memory);
                });

                setMemories(memoriesTemp);
                setLoadingMemories(false);

                console.log('Memories fetched: ', memoriesTemp);
            })
            .catch(err => console.error('Error fetching memories:', err));
    };

    useEffect(() => {
        fetchMemories();
    }, []);

    return (
        <MemoryContext.Provider
            value={{
                memories,
                setMemories,
                loadingMemories,
                setLoadingMemories,
                selectedMemory,
                setSelectedMemory,
                fetchMemories,
            }}
        >
            {props.children}
        </MemoryContext.Provider>
    );
};

export default MemoryProvider;
