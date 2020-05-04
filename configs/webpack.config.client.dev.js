const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rootPath = process.cwd();

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const isDevelopment = NODE_ENV === 'development';

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
    entry: ['./src/client/index.tsx'],
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
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true,
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: scssRegex,
                use: [
                    // Creates `style` nodes from JS strings
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevelopment,
                            reloadAll: true,
                        },
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
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevelopment,
                            reloadAll: true,
                        },
                    },
                    { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with 'declare modules '*.scss';' in it to tell TypeScript that 'import styles from './styles.scss';' means to load the module './styles.scss.d.td')
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                        }
                    }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    { loader: 'sass-loader' } // to convert SASS to CSS
                    // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
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
    devServer: {
        contentBase: path.join(rootPath, '.build'),
        compress: true,
        port: 8080,
        open: true,
        overlay: true,
        proxy: {
            '*': 'http://localhost:3000'
        },
        historyApiFallback: true,
        hot: true
    }
};

if (!isProduction) {
    webpackConfig.plugins.push(new HtmlWebpackPlugin());
}

if (isProduction) {
    const pathToLogo = path.join(rootPath, 'src/assets/icons/logo/logo-without-name.svg');
    webpackConfig.plugins.push(new FaviconsWebpackPlugin({
        logo: pathToLogo,
        prefix: 'favicons/'
    }));
}

path.join(rootPath, '.build/assets/'),

module.exports = webpackConfig;
