## Changelog

Some rework on my side :

-   Dropped OpenStreetMap Tile Server for Mapbox's (up to 7000 map load per month for now, but no choice since we're not allowed to use OSM's TileServer)
-   Replaced Leaflet by react-map-gl for easy integration with Mapbox
-   Replaced semantic-ui widgets by Material-ui
-   Added typescript to the stack, prevent easy mistakes and improve scalability
-   Building pages My memories, settings, about, other...

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
