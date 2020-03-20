import React from 'react';

import { withTranslation } from '../i18n';
import CustomAppBar from '../components/CustomAppBar';
import LoginForm from '../components/LoginForm';

const Login = ({ t, randomImage }) => {
    return (
        <div>
            <CustomAppBar />
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
                        backgroundImage: `url(/bg/${randomImage}.jpg)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div style={{ flexGrow: 1, width: '50%' }}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

Login.getInitialProps = async () => {
    const randomImage: number = Math.floor(Math.random() * 34) + 1;

    return {
        namespacesRequired: ['common'],
        randomImage,
    };
};

export default withTranslation('common')(Login as any);
