const path = require('path');
const rootPath = process.cwd();
const buildPath = path.join(rootPath, '.build');
const WebpackBar = require('webpackbar');

const { NODE_ENV } = process.env;


module.exports = {
    mode: NODE_ENV || 'development',
    target: 'node',
    stats: {
        outputPath: true
    },
    entry: './src/server/index.ts',
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
    plugins: [new WebpackBar({ color: 'red' })]
};
