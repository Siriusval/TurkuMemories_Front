require('dotenv').config();

module.exports = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN,
        LOGIN_URL: process.env.LOGIN_URL,
        LOGOUT_URL: process.env.LOGOUT_URL,
    },
};
