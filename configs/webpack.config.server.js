const webpack = require('webpack');
const path = require('path');
const rootPath = process.cwd();
const buildPath = path.join(rootPath, '.build');
const WebpackBar = require('webpackbar');
const nodeExternals = require('webpack-node-externals');
const commonWebpackConfig = require('./webpack.config.common');

const { NODE_ENV } = process.env;

const cssModuleRegex = /\.module\.scss$/;

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
            {
                test: cssModuleRegex,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            onlyLocals: true,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'svg/',
                        emitFile: false
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            emitFile: false
                        }
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            emitFile: false,
                            outputPath: (url) => {
                                return `fonts/${url}`;
                            }
                        }
                    }
                ]
            }
        ],
    },
    output: {
        filename: 'server.js',
        path: buildPath,
        publicPath: '/assets/'
    },
    resolve: commonWebpackConfig.resolve,
    plugins: [
        new WebpackBar({ color: 'red' }),
        // ignore the error: Error: Can't resolve 'pg-native'
        // solution from here - https://github.com/serverless-heaven/serverless-webpack/issues/78#issuecomment-405646040
        new webpack.IgnorePlugin(/^pg-native$/)
    ],
    externals: [nodeExternals({
        // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
        whitelist: []
    })],
};
