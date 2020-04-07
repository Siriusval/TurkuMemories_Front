/**
 * Login page
 * Maybe not use if we switch to Auth0 authentication
 * on the LEFT : contains a random picture of Turku
 * on the RIGHT : contains the login form
 */

// ---IMPORT ---
import React from 'react';
import { withTranslation } from '../i18n';
import LoginForm from '../components/LoginForm';
import backgrounds from '../backgrounds.json';
import { Background } from '../types';
import Head from 'next/head';

// --- COMPONENTS ---
const Login = ({ t, randomImage }) => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>

            <div
                id="flex-container-login"
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: '64px',
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                {/* LEFT */}
                <div
                    id="flex-item-left-login"
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
                        id="image-login"
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

                {/* RIGHT */}
                <div style={{ flexGrow: 1, width: '50%' }}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

// ---POPULATE PAGE  ---
/**
 * pass translation namespace
 * and a random number for background
 */
Login.getInitialProps = async () => {
    const randomNumber: number = Math.floor(Math.random() * 34) + 1;
    const randomImage: Background = backgrounds['data'][randomNumber];

    return {
        namespacesRequired: ['common'],
        randomImage,
    };
};

export default withTranslation('common')(Login as any);
