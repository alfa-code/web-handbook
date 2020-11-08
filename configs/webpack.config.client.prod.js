const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rootPath = process.cwd();

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

const commonWebpackConfig = require('./webpack.config.common');

const assetsPluginInstance = new AssetsPlugin({
    filename: 'assets.client.json',
    path: path.join(rootPath, '.build/'),
    prettyPrint: true
});

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.scss$/;
const scssRegex = /^((?!\.module).)*scss$/i;

const webpackConfig = {
    mode: NODE_ENV || 'development',
    entry: './src/client/index.tsx',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: cssRegex,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ],
            },
            {
                test: scssRegex,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: cssModuleRegex,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
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
                        outputPath: 'svg/'
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
                            outputPath: 'images/'
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
        filename: 'app.[hash].js',
        path: path.join(rootPath, '.build/assets/'),
        publicPath: '/assets/'
    },
    resolve: commonWebpackConfig.resolve,
    plugins: [
        assetsPluginInstance,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new WebpackBar()
    ],
};

if (!isProduction) {
    webpackConfig.plugins.push(new HtmlWebpackPlugin());
}

path.join(rootPath, '.build/assets/'),

module.exports = webpackConfig;
