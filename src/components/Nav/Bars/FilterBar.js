/**
 * Filter Bar, children of MenuContainer
 * Shows options to search or filters memories
 */
import React, { useContext } from 'react';
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react';
import CategoryContext from '../../../contexts/CategoryContext';

export const FilterBar = props => {
    //Vars
    const context = useContext(CategoryContext);
    const categories = context.categories;
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
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </div>
    );
};
