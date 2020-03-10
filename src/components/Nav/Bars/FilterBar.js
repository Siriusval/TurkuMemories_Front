/**
 * Filter Bar, children of MenuContainer
 * Shows options to search or filters memories
 */
import React, { useContext } from 'react';
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react';
import CategoryContext from '../../../contexts/CategoryContext';
import apis from '../../../api/index';
import MemoryContext from '../../../contexts/MemoryContext';

export const FilterBar = props => {
    //Vars
    const categoryContext = useContext(CategoryContext);
    const memoryContext = useContext(MemoryContext);
    const categories = categoryContext.categories;

    //Functions
    const handleCategoryChange = categoryIdList => {
        memoryContext.setLoadingMemories(true);
        let categoriesString = categoryIdList.join(',');

        apis.memories
            .getMemoriesByCategory(categoriesString)
            .then(res => {
                console.log(res);
                const memoriesTemp = [];
                res.data['rows'].forEach(element => {
                    memoriesTemp.push(element);
                });
                memoryContext.setMemories(memoriesTemp);
                console.log('Memories fetched: ', memoriesTemp);
            })
            .catch(err => {
                console.error('Error fetching memories:', err);
                memoryContext.setMemories([]);
            });
        memoryContext.setLoadingMemories(false);
    };

    return (
        <div>
            <Menu secondary>
                {/* --- SEARCHBAR --- */}
                <Menu.Item>
                    <Input
                        icon={<Icon name="search" circular link />}
                        focus
                        placeholder="Search..."
                    />
                </Menu.Item>

                {/* --- FILTER THEME --- */}
                <Menu.Item>
                    <Dropdown
                        placeholder="Categories"
                        multiple
                        search
                        selection
                        options={categories}
                        onChange={(e, { value }) => handleCategoryChange(value)}
                    />
                    {/*
                    <Dropdown
                        text="Theme"
                        icon="filter"
                        floating
                        labeled
                        button
                        className="icon"
                    >
                        <Dropdown.Menu>
                            <Input
                                icon="search"
                                iconPosition="left"
                                className="search"
                            />
                            <Dropdown.Divider />
                            <Dropdown.Header icon="tags" content="Categories" />
                            
                            <Dropdown.Menu scrolling>
                                {categories.map(option => (
                                    <Dropdown.Item
                                        key={option.value}
                                        {...option}
                                    />
                                ))}
                                </Dropdown.Menu>
                        </Dropdown.Menu>
                                </Dropdown>*/}
                </Menu.Item>
            </Menu>
        </div>
    );
};
