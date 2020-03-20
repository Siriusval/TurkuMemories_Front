import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <AuthProvider isLogged={true}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />{' '}
                </AuthProvider>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp as any);
