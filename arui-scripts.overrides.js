const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.alias = {
            Src: path.join(__dirname, 'src/'),
            Components: path.join(__dirname, 'src/client/components'),
            Server: path.join(__dirname, 'src/server/'),
            Assets: path.join(__dirname, 'src/assets/')
        };
        config.module.rules[0].oneOf.unshift(
            {
                test: /\.scss$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    require.resolve('sass-loader')
                ]
            }
        );

        return config;
    }
};
