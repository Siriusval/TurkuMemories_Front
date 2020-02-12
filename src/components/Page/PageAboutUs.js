/**
 * Page about us
 * Displays some informations about the website and the museum
 *
 * Contain an accordion item and logic
 */
import React, { Component } from 'react'
import { Header, Icon, Accordion } from 'semantic-ui-react'
import { PageTemplate } from './PageTemplate'

export class PageAboutUs extends Component {
  /**
   * Which accordion item to expend
   */
  state = { activeIndex: 0 }

  /**
   * Expand accordion item clicked
   */
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

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
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Who are we ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>We are the museum of Turku.</p>
              <p>
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla
              </p>
            </Accordion.Content>

            {/* What kind of memory */}
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              What kinds of memory is here ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla
              </p>
            </Accordion.Content>

            {/* How to post memory */}
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              How do you I post a memory ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla blablabla blablabla blablabla
                blablabla
              </p>
            </Accordion.Content>
          </Accordion>
        </div>
      </PageTemplate>
    )
  }
}
