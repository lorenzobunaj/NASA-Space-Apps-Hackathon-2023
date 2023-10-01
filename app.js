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

const planetController = require('./planetController');

// initialize the app
const app = express();

// MIDDLEWARES

// Express attempts to determine the IP address of the client connected through the front-facing proxy
app.enable('trust proxy');

// set Pug as view engine and views as the templates folder
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// set public as static files folder
app.use(express.static(path.join(__dirname, 'public')));

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

// data sanitization against NoSQL query injection
app.use(mongoSanitize());

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

router.route('/:id')
    .get(
        planetController.getPlanet
    )

app.use(`${apiRoute}/planets`, router);

module.exports = app;