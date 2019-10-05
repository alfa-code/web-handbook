const path = require('path');
module.exports = {
    webpack: (config) => {
        config.resolve.alias = {
            Src: path.join(__dirname, 'src/'),
            Components: path.join(__dirname, 'src/client/components'),
            Server: path.join(__dirname, 'src/server/')
        };
        return config;
    }
};