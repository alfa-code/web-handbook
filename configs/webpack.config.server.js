const path = require('path');

const rootPath = process.cwd();

const buildPath = path.join(rootPath, '.dist');

module.exports = {
    target: 'node',
    stats: {
        outputPath: true
    },
    mode: 'development',
    entry: './src/server/index.ts',
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: 'server.js',
        path: buildPath,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            Src: path.join(rootPath, './src/'),
            Components: path.join(rootPath, './src/client/components/'),
        }
    },
    // plugins: [assetsPluginInstance]
    // node: {
    //     fs: 'empty',
    //     net: 'empty',
    // }
};
