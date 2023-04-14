const port = 3000;

module.exports = {
    app: {
        port
    },
    swagger: {
        host: process.env.APPLICATION_HOST || `localhost:${port}`
    }
};