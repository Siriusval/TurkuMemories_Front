---
title: TurkuMemories_Front
author: vhulot
date: 2020-04
---

# Turku Memories - Front

![alt-text](./assets/poster.jpg 'Poster for Turku Memories')
Project realised for Capstone at Turku's University of Applied Sciences (2019-20).
This is a web app that display an interactive map, used to gather stories of people around Turku.

Done in partnership with the City of Turku.

Project uses:

-   Next.js
-   TypeScript
-   Auth0
-   Material UI
-   i18next

## Preview

**Browsing memories 01**
![alt-text](./assets/gifs/browsingMemories.gif 'Browsing memories 01')

**Browsing memories 02**
![alt-text](./assets/gifs/browsingMemories2.gif 'Browsing memories 02')

**Writing new memory 01**
![alt-text](./assets/gifs/writingNewMemory1.gif 'Writing new memory 01')

**Writing new memory 02**
![alt-text](./assets/gifs/writingNewMemory2.gif 'Writing new memory 02')

**Writing new memory 03**
![alt-text](./assets/gifs/writingNewMemory3.gif 'Writing new memory 03')

## Changelog

Some rework on my side :

-   Dropped OpenStreetMap Tile Server for Mapbox's (up to 7000 map load per month for now, but no choice since we're not allowed to use OSM's TileServer)
-   Replaced Leaflet by react-map-gl for easy integration with Mapbox
-   Replaced semantic-ui widgets by Material-ui
-   Added typescript to the stack, prevent easy mistakes and improve scalability
-   Building pages My memories, settings, about, other...

## Before you start

Be sure to have the backend server & database running.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `/build` folder.<br />
It correctly bundles NextJS in production mode and optimizes the build for the best performance.
Also transpile the Typescript into Javascript
The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run prod`

Build and serve the content from /build folder.
Faster than using dev server for demo.
