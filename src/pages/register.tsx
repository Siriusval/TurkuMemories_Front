import React from 'react';

import { withTranslation } from '../i18n';
import CustomAppBar from '../components/CustomAppBar';
import RegisterForm from '../components/RegisterForm';

const Register = ({ t }) => {
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

Register.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation('common')(Register as any);
