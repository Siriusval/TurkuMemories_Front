/**
 * Register page
 * Maybe not use if we switch to Auth0 authentication
 * on the LEFT : contains a random picture of Turku
 * on the RIGHT : contains the register form
 */

// --- IMPORTS ---
import React from 'react';
import { withTranslation } from '../i18n';
import RegisterForm from '../components/RegisterForm';

// --- COMPONENT ---
const Register = ({ t }) => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: '64px',
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <div
                    style={{
                        flexGrow: 1,
                        width: '50%',
                        backgroundImage: 'url(/bg/22.jpg)',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div style={{ flexGrow: 1, width: '50%' }}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

// --- POPULATE PAGE ---
Register.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(Register as any);
