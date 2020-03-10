/**
 * Page about us
 * Displays some informations about the website and the museum
 *
 * Contain an accordion item and logic
 */
import React, { useState } from 'react';
import { Header, Icon, Accordion } from 'semantic-ui-react';
import { PageTemplate } from './PageTemplate';

export const PageAboutUs = props => {
    //States
    /**
     * Which accordion item to expend
     */
    const [activeIndex, setActiveIndex] = useState(0);

    //Functions
    /**
     * Expand accordion item clicked
     */
    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

    return (
        <PageTemplate>
            {/* --- HEADER ---*/}
            <Header as="h2" icon>
                <Icon name="info" />
                About Us
                <Header.Subheader>
                    Here is more information about us.
                </Header.Subheader>
            </Header>

            <div style={{ textAlign: 'left' }}>
                {/* --- ACCORDION --- */}
                <Accordion styled fluid>
                    {/* Who are we */}
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={handleClick}
                    >
                        <Icon name="dropdown" />
                        Who are we ?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>We are the museum of Turku.</p>
                        <p>
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla
                        </p>
                    </Accordion.Content>

                    {/* What kind of memory */}
                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={handleClick}
                    >
                        <Icon name="dropdown" />
                        What kinds of memory is here ?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla
                        </p>
                    </Accordion.Content>

                    {/* How to post memory */}
                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={handleClick}
                    >
                        <Icon name="dropdown" />
                        How do you I post a memory ?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla blablabla
                            blablabla blablabla blablabla blablabla
                        </p>
                    </Accordion.Content>
                </Accordion>
            </div>
        </PageTemplate>
    );
};
