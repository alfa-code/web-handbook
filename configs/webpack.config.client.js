const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const rootPath = process.cwd();

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

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
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: cssRegex,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: scssRegex,
                use: [
                    // Creates `style` nodes from JS strings
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: cssModuleRegex,
                use: [
                    { loader: 'style-loader' }, // to inject the result into the DOM as a style block
                    { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with 'declare modules '*.scss';' in it to tell TypeScript that 'import styles from './styles.scss';' means to load the module './styles.scss.d.td')
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    { loader: 'sass-loader' } // to convert SASS to CSS
                    // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
                ]
            },
            // {
            //     test: cssModuleRegex,
            //     use: [
            //         'style-loader',
            //         // MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 // importLoaders: 1,
            //                 modules: true,
            //                 // localIdentName: '[name]__[local]___[hash:base64:5]'
            //             },
            //         },
            //         'sass-loader'
            //     ],
            // },
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss', '.sass', '.pcss', '.module.scss', '.svg'],
        alias: {
            Src: path.join(rootPath, './src/'),
            Components: path.join(rootPath, './src/client/components/'),
            Assets: path.join(rootPath, './src/assets/'),
            Fonts: path.join(rootPath, './src/assets/fonts/'),
        }
    },
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
    }
};

if (!isProduction) {
    webpackConfig.plugins.push(new HtmlWebpackPlugin());
}

module.exports = webpackConfig;
