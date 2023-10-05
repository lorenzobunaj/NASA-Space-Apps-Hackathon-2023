const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const csp = require('helmet-csp');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const planetController = require('./planet/planetController');

// initialize the app
const app = express();

// MIDDLEWARES

// Express attempts to determine the IP address of the client connected through the front-facing proxy
app.enable('trust proxy');

// implementing CORS (cross-origin resource sharing)
// CORS allows restricted resources on a web page to be accessed from another domain (allows API sharing)
app.use(cors());

// set security HTTP headers
app.use(helmet());

// set up Content-Security-Policy
app.use(
    csp({
        useDefaults: true,
        directives: {
            defaultSrc: "*",
            scriptSrc: "*",
            objectSrc: "*"
        },
        reportOnly: false,
    })
);

// prevent XSS attack (cross-site scripting attack)
app.use(xss());

// compress data from the client
app.use(compression());

// concise output colored by response status for development use
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// ROUTES

// API routes
const apiRoute = '/api/v1';

const router = express.Router();

router.route('/')
    .get(
        planetController.getPlanetModel
    )

router.route('/image')
    .get(
        planetController.getPlanetImage
    )

app.use(`${apiRoute}/planets/:id`, router);

module.exports = app;