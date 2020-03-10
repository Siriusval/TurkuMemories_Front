/**
 * Page 404
 * Used for filling page in testing
 */
import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { PageTemplate } from './PageTemplate';

export const Page404 = props => {
    return (
        <PageTemplate>
            <Header as="h2" icon>
                <Icon name="settings" />
                404 : Page not found
                <Header.Subheader>
                    This page does not exist. Please go back to Home.
                </Header.Subheader>
            </Header>
        </PageTemplate>
    );
};
