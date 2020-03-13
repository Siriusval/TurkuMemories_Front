/**
 * Modal Component opening when we click on SignIn Button
 * Can render'SignInContent' or 'SignUpContent' depending on the state
 */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, Button, Container } from 'semantic-ui-react';
import { SignInContent } from './Content/SignInContent';
import { SignUpContent } from './Content/SignUpContent';
import { useTranslation } from 'react-i18next';

export const LoginModal = props => {
    //States
    const [toDisplay, setToDisplay] = useState('SignIn');
    const [redirect, setRedirect] = useState(false);
    const { t } = useTranslation();

    //Funtions
    /**
     * Change state when we click on link in LoginModal
     */
    const handleChangeContent = (event, value) => {
        event.preventDefault();
        setToDisplay(value);
    };

    return redirect ? (
        <Redirect to="/" />
    ) : (
        <Modal size="mini" trigger={<Button>{ t('menubar.login')}</Button>}>
            {/* --- TITLE --- */}
            <Modal.Header>
                <Container textAlign="center">
                    Welcome to My Turku Memories
                </Container>
            </Modal.Header>

            {/* --- CONTENT --- */}
            {toDisplay === 'SignIn' ? (
                <SignInContent
                    callbackFn={handleChangeContent}
                    setRedirect={setRedirect}
                />
            ) : (
                <SignUpContent
                    callbackFn={handleChangeContent}
                    setRedirect={setRedirect}
                />
            )}
        </Modal>
    );
};
