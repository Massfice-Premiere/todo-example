const docs = require('../config/docs.json');
const components = require('../config/components.json');
const paths = require('../config/paths.json');
const { version, description } = require('../package.json');
const { swagger: { host } } = require('../config');

module.exports = {
    ...docs,
    info: {
        ...docs.info,
        version,
        description
    },
    host,
    components,
    paths
};