const webpack = require('webpack');
const path = require('path');
const rootPath = process.cwd();
const buildPath = path.join(rootPath, '.build');
const WebpackBar = require('webpackbar');

const { NODE_ENV } = process.env;

const commonWebpackConfig = require('./webpack.config.common');

const cssModuleRegex = /\.module\.scss$/;

function excludeNodeModulesExcept (modules)
{
    let pathSep = path.sep;
    if (pathSep == '\\') // must be quoted for use in a regexp:
        pathSep = '\\\\';
        const moduleRegExps = modules.map (function (modName) { return new RegExp("node_modules" + pathSep + modName)})

    return function (modulePath) {
        if (/node_modules/.test(modulePath)) {
            for (let i = 0; i < moduleRegExps.length; i ++)
                if (moduleRegExps[i].test(modulePath)) return false;
            return true;
        }
        return false;
    };
}

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
                exclude: excludeNodeModulesExcept(["@hapi"])
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
    ]
};
