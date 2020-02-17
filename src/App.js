/**
 * Main entry for react app
 * Displays Menu, and page depending on URL
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MenuContainer } from './components/Nav/MenuContainer';
import { MapContainer } from './components/Page/MapPage/MapContainer';
import { Page404 } from './components/Page/Page404';
import { PageAboutUs } from './components/Page/PageAboutUs';
import { AddMemoryPage } from './components/Page/AddMemoryPage/AddMemoryPage';

import { NotificationContainer } from 'react-notifications';

function App() {
    return (
        <div className="App">
            <Router>
                {/* --- MENU ---*/}
                <div className="box">
                    <header>
                        <Route
                            path="/"
                            component={MenuContainer}
                            className="row header"
                        />
                    </header>

                    {/* --- PAGE --- */}
                    <div className="row content">
                        {/* Switch render first found*/}
                        <Switch>
                            <Route exact path="/" component={MapContainer} />

                            <Route path="/myMemories" component={Page404} />
                            <Route
                                path="/addMemory"
                                component={AddMemoryPage}
                            />
                            <Route path="/about" component={PageAboutUs} />
                            <Route component={Page404} />
                        </Switch>
                    </div>
                </div>
            </Router>
            <NotificationContainer />
        </div>
    );
}

export default App;
