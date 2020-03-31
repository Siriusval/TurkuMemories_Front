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
import { AuthProvider } from '../contexts/AuthContext';
import { SnackbarProvider } from '../contexts/SnackbarContext';
import CustomAppBar from '../components/CustomAppBar';

// --- COMPONENT ---
const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <AuthProvider isLogged={false}>
                    <SnackbarProvider>
                        <CustomAppBar />
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Component {...pageProps} />
                    </SnackbarProvider>
                </AuthProvider>
            </ThemeProvider>
        </React.Fragment>
    );
};

// --- INITIAL DATA POPULATION ---
MyApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp as any);
