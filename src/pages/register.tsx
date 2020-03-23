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
import backgrounds from '../backgrounds.json';
import { Background } from '../types';

// --- COMPONENT ---
const Register = ({ t, randomImage }) => {
    return (
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
                    backgroundImage: `url(/bg/${randomImage.id}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        fontSize: '0.8rem',
                        color: 'white',
                        textShadow:
                            '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    }}
                >
                    {randomImage.credit}
                </div>
            </div>
            <div style={{ flexGrow: 1, width: '50%' }}>
                <RegisterForm />
            </div>
        </div>
    );
};

// --- POPULATE PAGE ---
Register.getInitialProps = async () => {
    const randomNumber: number = Math.floor(Math.random() * 34) + 1;
    const randomImage: Background = backgrounds.data[randomNumber];

    return {
        namespacesRequired: ['common'],
        randomImage,
    };
};

export default withTranslation('common')(Register as any);
