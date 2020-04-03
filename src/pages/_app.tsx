/**
 * Custom App component
 * Initialize any page
 *
 * Allows to do things such as :
 * - Persisting layout between page changes
 * - Keeping state when navigating pages
 * - Custom error handling using componentDidCatch
 * - Inject additional data into pages
 * - Add global CSS
 */

// --- IMPORTS ---
import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import { SnackbarProvider } from '../contexts/SnackbarContext';
import CustomAppBar from '../components/CustomAppBar';
import { apis, setCookies } from '../services/apis';
import nextCookie from 'next-cookies';

// --- COMPONENT ---
const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <SnackbarProvider>
                    <CustomAppBar {...pageProps} />
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </SnackbarProvider>
            </ThemeProvider>
        </React.Fragment>
    );
};

// --- INITIAL DATA POPULATION ---
MyApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    const ctx = appContext.ctx;

    const cookie = ctx.req ? ctx.req.headers.cookie : undefined;
    setCookies(cookie);

    let isLogged: boolean = false;

    await apis.auth
        .isLogged()
        .then(res => {
            isLogged = res.data.logged;
            console.log('User logged : ', isLogged);
        })
        .catch(err => console.error('Error getting user isLogged'));

    appProps.pageProps['isLogged'] = isLogged;

    return { ...appProps };
};

export default appWithTranslation(MyApp as any);
