/**
 * Navigation Bar, children of MenuContainer
 * Shows tabs that allows us to reach pages of the website
 */
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Menu,
    Dropdown,
    MenuItem,
    Image,
    Button,
    Icon,
} from 'semantic-ui-react';
import { LoginModal } from '../LoginModal/LoginModal';

/**
 * Language options for dropdown item
 */
const languageOptions = [
    { key: 'EN', text: 'EN', value: 'EN' },
    { key: 'FI', text: 'FI', value: 'FI' },
    { key: 'SWE', text: 'SWE', value: 'SWE' },
];

export const NavigationBar = props => {
    //Vars
    const activeItem = props.activeItem;
    const activeLanguage = props.activeLanguage;

    return (
        <Menu secondary pointing fluid>
            {/* --- LOGO --- */}
            <MenuItem
                as={Link}
                to="/"
                key="0"
                name="Home"
                onClick={props.handleItemClick}
                style={{ padding: ' 8px 8px 8px 8px' }}
            >
                <Image src="/images/logo512.png" size="small" />
            </MenuItem>

            {/* --- HOME --- */}
            <Menu.Item
                className="pageSelectItem"
                as={Link}
                to="/"
                key="1"
                active={activeItem === 'Home'}
                name="Home"
                content="Home"
                onClick={props.handleItemClick}
            ></Menu.Item>

            {/* --- MY MEMORIES --- */}
            <Menu.Item
                className="pageSelectItem"
                as={Link}
                to="myMemories"
                key="2"
                active={activeItem === 'My Memories'}
                name="My Memories"
                content="My Memories"
                onClick={props.handleItemClick}
            ></Menu.Item>

            {/* --- ABOUT US --- */}
            <Menu.Item
                className="pageSelectItem"
                as={Link}
                to="about"
                key="3"
                active={activeItem === 'About Us'}
                name="About Us"
                content="About Us"
                onClick={props.handleItemClick}
            ></Menu.Item>

            <Menu.Menu position="right">
                {/* --- ADD MEMORY --- */}
                <Menu.Item
                    as={Link}
                    to="addMemory"
                    name="Add Memory"
                    onClick={props.handleItemClick}
                >
                    <Button icon labelPosition="left" color="teal">
                        <Icon name="add" />
                        Add Memory
                    </Button>
                </Menu.Item>

                {/* --- LOGIN --- */}
                <Menu.Item>
                    <LoginModal />
                </Menu.Item>

                {/* --- LANGUAGE --- */}
                <Menu.Item
                    style={{
                        minWidth: '140px',
                        maxWidth: '140px',
                    }}
                >
                    {/*//prevent resize when change language */}
                    <Dropdown
                        fluid
                        button
                        className="icon"
                        floating
                        labeled
                        icon="world"
                        value={activeLanguage}
                        options={languageOptions}
                        onClick={props.handleChangeLanguage}
                    />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};
