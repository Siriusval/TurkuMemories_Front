/**
 * Modal Component opening when we click on SignIn Button
 * Can render'SignInContent' or 'SignUpContent' depending on the state
 */
import React, { useState } from 'react';
import { Modal, Button, Container } from 'semantic-ui-react';
import { SignInContent } from './Content/SignInContent';
import { SignUpContent } from './Content/SignUpContent';

export const LoginModal = props => {
    //States
    const [toDisplay, setToDisplay] = useState('SignIn');

    //Funtions
    /**
     * Change state when we click on link in LoginModal
     */
    const handleChangeContent = (event, value) => {
        event.preventDefault();
        setToDisplay(value);
    };

    return (
        <Modal size="mini" trigger={<Button>Login</Button>}>
            {/* --- TITLE --- */}
            <Modal.Header>
                <Container textAlign="center">
                    Welcome to My Turku Memories
                </Container>
            </Modal.Header>

            {/* --- CONTENT --- */}
            {toDisplay === 'SignIn' ? (
                <SignInContent callbackFn={handleChangeContent} />
            ) : (
                <SignUpContent callbackFn={handleChangeContent} />
            )}
        </Modal>
    );
};
