import dotenv from 'dotenv';
dotenv.config();

export default {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN,
    },
};
