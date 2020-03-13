/**
 * Page about us
 * Displays some informations about the website and the museum
 *
 * Contain an accordion item and logic
 */
import React, { useState } from 'react';
import { Header, Icon, Accordion } from 'semantic-ui-react';
import { PageTemplate } from './PageTemplate';
import { useTranslation } from 'react-i18next';


export const PageAboutUs = props => {
    //States
    /**
     * Which accordion item to expend
     */
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useTranslation();

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
                    { t('about.title') }
                <Header.Subheader>
                    { t('about.intro') }
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
                        { t('about.who') }
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>
                            { t('about.who_param1')}
                        </p>
                        <p>
                            { t('about.who_param2')}
                        </p>
                    </Accordion.Content>

                    {/* What kind of memory */}
                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={handleClick}
                    >
                        <Icon name="dropdown" />
                        { t('about.what') }
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                            { t('about.what_param')}
                        </p>
                    </Accordion.Content>

                    {/* How to post memory */}
                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={handleClick}
                    >
                        <Icon name="dropdown" />
                        { t('about.how')}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                            { t('about.how_param')}
                        </p>
                    </Accordion.Content>
                </Accordion>
            </div>
        </PageTemplate>
    );
};
