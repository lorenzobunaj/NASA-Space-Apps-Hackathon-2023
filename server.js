const dotenv = require('dotenv');
const app = require('./app');
const { Configuration, OpenAIApi } = require("openai");

// handle uncaught exception
process.on('uncaughtException', err => {
    process.exit(1);
})

// CONFIGURE DOTENV

dotenv.config({ path: './config.env' });

// CONFIGURE THE SERVER

// get the port
const port = process.env.PORT;

// start
const server = app.listen(port, () => {
    console.log(`running on port ${port}...`);
});

// handle unhandled rejection
process.on('unhandledRejection', err => {
    console.log('Unhandled rejection, shutting down...');
    server.close(() => {
        process.exit(1);
    });
});

// handle sigterms (termination signals)
process.on('SIGTERM', () => {
    console.log('Sigterm received, shutting down...');
    server.close(() => {
        console.log('Process terminated')
    });
});