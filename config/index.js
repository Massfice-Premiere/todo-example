const port = 3000;

module.exports = {
    app: {
        port
    },
    swagger: {
        host: process.env.APPLICATION_HOST || `localhost:${port}`
    },
    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017',
        dbname: process.env.MONGO_DBNAME || 'todos'
    }
};