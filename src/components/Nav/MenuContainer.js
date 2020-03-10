/**
 * Menu bar for website
 * Clicking on the items trigger react Router navigation, then render page
 *
 * Contain navigation bar 100% of time
 * Displays filter bar only if on home page (which is map page)
 */
import React, { useState } from 'react';
import { NavigationBar } from './Bars/NavigationBar';
import { FilterBar } from './Bars/FilterBar';

/**
 * Style css
 */
const menuStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    top: 0,
    left: 0,
    zIndex: '2',
    backgroundColor: 'white',
};

export const MenuContainer = props => {
    //Vars
    /**
     * activeItem : highlight current tab
     * activeLanguage : choose website language
     */
    const [activeItem, setActiveItem] = useState('Home');
    const [activeLanguage, setActiveLanguage] = useState('EN');

    //DEBUG
    const location = props.location;
    console.log(location);

    /**
     * Callback : handle click on nav bar items
     */
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    /**
     * Callback : handle click on language dropdown item
     */
    const handleChangeLanguage = (e, { key }) => setActiveLanguage(key);

    return (
        <div style={menuStyle}>
            <NavigationBar
                activeItem={activeItem}
                activeLanguage={activeLanguage}
                handleItemClick={handleItemClick}
                handleChangeLanguage={handleChangeLanguage}
            />
            {location.pathname === '/' ? <FilterBar /> : null}
        </div>
    );
};
