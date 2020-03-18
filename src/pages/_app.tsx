import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

//import { config } from "@fortawesome/fontawesome-svg-core";
//import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
//config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />{' '}
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp as any);
